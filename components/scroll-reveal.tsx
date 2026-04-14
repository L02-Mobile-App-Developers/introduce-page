"use client"

import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type ScrollRevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number
  duration?: number
  threshold?: number
  distance?: number
  once?: boolean
}

export function ScrollReveal({
  className,
  children,
  delay = 0,
  duration = 700,
  threshold = 0.2,
  distance = 24,
  once = true,
  style,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(node)
          }
        }
      },
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, once])

  const mergedStyle: CSSProperties = {
    ...style,
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${distance}px, 0)`,
  }

  return (
    <div
      ref={ref}
      style={mergedStyle}
      className={cn(
        "motion-safe:transition-[transform,opacity,filter] motion-safe:ease-out will-change-transform",
        isVisible ? "opacity-100 blur-0" : "opacity-0 blur-[2px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}