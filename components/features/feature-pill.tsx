import type React from "react"

interface FeaturePillProps {
  icon: React.ReactNode
  title: string
  desc: string
}

export function FeaturePill({ icon, title, desc }: FeaturePillProps) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border bg-white p-4 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}
