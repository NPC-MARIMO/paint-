"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { PaintColor } from "@/data/colors"
import { cn } from "@/lib/utils"

interface ColorSwatchProps {
  color: PaintColor
  isSelected?: boolean
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  showName?: boolean
  index?: number
}

export function ColorSwatch({ 
  color, 
  isSelected, 
  onClick, 
  size = "md",
  showName = true,
  index = 0
}: ColorSwatchProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center gap-2 p-2 rounded-xl transition-all",
        onClick && "hover:bg-white/80 cursor-pointer",
        isSelected && "bg-white shadow-sm"
      )}
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            sizeClasses[size],
            "rounded-full shadow-md border-2 transition-all",
            isSelected ? "border-navy ring-2 ring-navy/20" : "border-white/50"
          )}
          style={{ backgroundColor: color.hex }}
        />
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center">
              <Check className="h-3 w-3 text-navy" />
            </div>
          </motion.div>
        )}
      </div>
      {showName && (
        <span className={cn(
          "text-xs text-center font-medium transition-colors line-clamp-1 max-w-[80px]",
          isSelected ? "text-navy" : "text-charcoal/70 group-hover:text-charcoal"
        )}>
          {color.name}
        </span>
      )}
    </motion.button>
  )
}

interface ColorSwatchSimpleProps {
  hex: string
  name?: string
  isSelected?: boolean
  onClick?: () => void
  size?: "sm" | "md" | "lg"
}

export function ColorSwatchSimple({ 
  hex, 
  name,
  isSelected, 
  onClick, 
  size = "md"
}: ColorSwatchSimpleProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group",
        onClick && "cursor-pointer"
      )}
      title={name}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          sizeClasses[size],
          "rounded-full shadow-sm border-2 transition-all",
          isSelected ? "border-navy ring-2 ring-navy/20" : "border-white"
        )}
        style={{ backgroundColor: hex }}
      />
      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Check className={cn(
            "text-white drop-shadow-md",
            size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-5 w-5"
          )} />
        </div>
      )}
    </button>
  )
}
