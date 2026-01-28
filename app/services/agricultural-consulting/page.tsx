'use client';

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AgriculturalConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Agricultural Consulting"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Agricultural Consulting</h1>
          <p className="mt-6 max-w-xl text-xl">Expert advice on agricultural markets, trends, and opportunities.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Consulting Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Pacific Agriscience offers comprehensive agricultural consulting services to help you navigate the complex
          agricultural landscape:
        </p>
        <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
          <li>Market research and analysis</li>
          <li>Crop selection and rotation strategies</li>
          <li>Sustainable farming practices</li>
          <li>Technology integration in agriculture</li>
          <li>Regulatory compliance and certification assistance</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need expert agricultural advice?
              <span className="block text-xl font-medium mt-2">Our consultants are ready to assist you.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-700 hover:bg-gray-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
