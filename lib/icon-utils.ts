import React from "react"
import {
  PlayCircle,
  ShieldCheck,
  Cpu,
  BadgeCheck,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  Smile,
  Sparkles,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  type LucideIcon
} from "lucide-react"

// Icon mapping object
const iconMap: Record<string, LucideIcon> = {
  PlayCircle,
  ShieldCheck,
  Cpu,
  BadgeCheck,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  Smile,
  Sparkles,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
}

/**
 * Get an icon component by name
 * @param iconName - The name of the icon as a string
 * @returns The icon component or null if not found
 */
export function getIcon(iconName: string): LucideIcon | null {
  return iconMap[iconName] || null
}

/**
 * Render an icon component with optional props
 * @param iconName - The name of the icon as a string
 * @param props - Optional props to pass to the icon component
 * @returns JSX element of the icon or null if not found
 */
export function renderIcon(iconName: string, props?: React.ComponentProps<LucideIcon>) {
  const IconComponent = getIcon(iconName)
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`)
    return null
  }
  return React.createElement(IconComponent, props)
}

/**
 * Get all available icon names
 * @returns Array of available icon names
 */
export function getAvailableIcons(): string[] {
  return Object.keys(iconMap)
}

/**
 * Check if an icon name is valid
 * @param iconName - The name of the icon to check
 * @returns True if the icon exists, false otherwise
 */
export function isValidIcon(iconName: string): boolean {
  return iconName in iconMap
}
