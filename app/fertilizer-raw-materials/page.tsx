'use client';

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

export default function FertilizerRawMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/fertilizer-raw.jpg"
            alt="Fertilizer Raw Materials"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Fertilizer Raw Materials</h1>
          <p className="mt-6 max-w-xl text-xl">High-quality raw materials for fertilizer production.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Fertilizer Raw Materials</h2>
        <p className="mt-4 text-lg text-gray-600">
          Pacific Agriscience offers a comprehensive range of high-quality fertilizer raw materials to meet diverse
          agricultural needs. Our product lineup includes essential nutrients, micronutrients, and specialty products
          designed to enhance crop yield and soil health.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          We pride ourselves on our sourcing philosophy, ensuring the delivery of quality products and long-term
          reliability of supply at competitive prices. Our approach includes manufacturing plant audits, stringent
          quality control procedures, and a commitment to compliance with heavy metal limits.
        </p>
        <div className="mt-8">
          <a
            href="/PAHK Fertilizer brochure (2023).pdf"
            download="PAHK Fertilizer brochure (2023).pdf"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
          >
            Download Fertilizer Brochure <Download className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking for high-quality fertilizer raw materials?
              <span className="block text-xl font-medium mt-2">
                Our team can help you source the best materials for your production needs.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-700 hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
