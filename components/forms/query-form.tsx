"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { SiteData } from "@/lib/data-service"

interface QueryFormProps {
  formConfig: SiteData['appointment']['form']
}

export function QueryForm({ formConfig }: QueryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState<Record<string, string>>({})

  async function onSubmit(formData: FormData) {
    setStatus("loading")
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData as any)),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const renderField = (field: SiteData['appointment']['form']['fields'][0]) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name] || "",
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        handleInputChange(field.name, e.target.value),
      placeholder: field.placeholder,
      required: field.required
    }

    if (field.type === "textarea") {
      return (
        <div key={field.name} className="mt-4 flex min-h-0 flex-1 flex-col">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Textarea
            {...commonProps}
            className="mt-2 min-h-[220px] flex-1 resize-y"
          />
        </div>
      )
    }

    return (
      <div key={field.name} className="space-y-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        <Input
          {...commonProps}
          type={field.type}
          min={field.min}
          max={field.max}
        />
      </div>
    )
  }

  // Separate textarea fields from regular input fields
  const inputFields = formConfig.fields.filter(field => field.type !== "textarea")
  const textareaFields = formConfig.fields.filter(field => field.type === "textarea")

  return (
    <form action={onSubmit} className="flex h-full w-full flex-col">
      {/* Inputs grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {inputFields.map(renderField)}
      </div>

      {/* Growing textarea area */}
      {textareaFields.map(renderField)}

      {/* CTA pinned at bottom with respectful padding and clear gap */}
      <div className="mt-4">
        <Button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading"
            ? formConfig.loadingText
            : status === "success"
              ? formConfig.successText
              : formConfig.submitText}
        </Button>
        {status === "error" && <p className="mt-2 text-sm text-red-600">{formConfig.errorText}</p>}
      </div>
    </form>
  )
}
