"use client"

import { type ImgHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string
}

export function Logo({ className, containerClassName, alt = "Ashirwaad Coating logo", ...props }: LogoProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl", containerClassName)}>
      <img
        src="/logo.png"
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        {...props}
      />
    </div>
  )
}
