"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })

    const currentElement = domRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    // Trigger the fade-in effect immediately on mount
    setVisible(true)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <div
      className={`transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      ref={domRef}
    >
      {children}
    </div>
  )
}
