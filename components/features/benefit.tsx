import type React from "react"

interface BenefitProps {
  icon: React.ReactNode
  title: string
  desc: string
}

export function Benefit({ icon, title, desc }: BenefitProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-blue-50 p-2">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}
