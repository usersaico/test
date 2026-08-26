import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost" | "neon"
    size?: "sm" | "md" | "lg"
  }
>(({ className, variant = "default", size = "md", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-volt focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-graphite text-white hover:bg-graphite/90",
    outline: "border-2 border-graphite bg-transparent hover:bg-graphite hover:text-white",
    ghost: "hover:bg-graphite/10 hover:text-graphite",
    neon: "bg-neon-volt text-graphite hover:bg-neon-volt/90 font-bold",
  }
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  }
  
  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
