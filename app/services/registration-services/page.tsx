"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function RegistrationServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/registration-services.jpg"
            alt="Registration Services"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Registration Services</h1>
          <p className="mt-6 max-w-xl text-xl">
            Expert assistance in registering agricultural products in various markets.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Registration Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          At Pacific Agriscience, we offer comprehensive registration services for agricultural products, ensuring
          compliance with regulatory requirements in various markets. Our services include:
        </p>
        <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
          <li>Regulatory assessment and strategy development</li>
          <li>Preparation and submission of registration dossiers</li>
          <li>Data gap analysis and study management</li>
          <li>Liaison with regulatory authorities</li>
          <li>Post-registration support and maintenance</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need assistance with product registration?
              <span className="block text-xl font-medium mt-2">
                Our experts are ready to guide you through the process.
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
