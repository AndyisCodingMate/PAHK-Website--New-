"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "@/translations"

export default function HeroSlideshow() {
  const { t } = useTranslations()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = t("home.hero.slides")

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={
                [
                  "/images/pa-cover-photo.jpg",
                  "/images/agricultural-field.jpg",
                  "/images/globe-in-hands.jpg",
                  "/images/sustainable-agriculture.jpg",
                ][index] || "/placeholder.svg"
              }
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="relative z-20 flex h-full items-center">
              <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="md:w-2/3">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{slide.title}</h1>
                  <p className="mt-6 max-w-xl text-lg">{slide.description}</p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href={["/products-and-services", "/about-us", "/products-and-services", "/about-us"][index]}
                      className="rounded-md bg-white px-5 py-3 text-base font-semibold text-green-700 shadow-sm hover:bg-gray-100 transition-colors"
                    >
                      {slide.buttonText}
                    </Link>
                    <Link
                      href="/contact-us"
                      className="flex items-center text-base font-semibold hover:text-green-200 transition-colors"
                    >
                      {t("common.contactUs")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {slides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
