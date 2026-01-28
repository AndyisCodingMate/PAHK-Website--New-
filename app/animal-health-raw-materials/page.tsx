'use client';

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function AnimalHealthRawMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-page">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/design-mode/A-Raw.jpg.jpeg"
            alt="Animal Health Raw Materials"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Animal Health Raw Materials</h1>
          <p className="mt-6 max-w-xl text-xl">
            High-quality raw materials for medicine used in the veterinary industry.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300">
          Our Animal Health Raw Materials
        </h2>
        <p className="mt-4 text-lg text-page">
          Pacific Agriscience Hong Kong, with its strong connections in the chemical industry, offers a wide range of
          raw materials for medicine used in the veterinary industry. We provide Active Pharmaceutical Ingredients (API)
          for veterinary use, ensuring high quality and reliability.
        </p>
        <div className="mt-8 space-y-4">
          <a
            href="/API for Veterinary Use - PAHK (Jan 1, 2025).pdf"
            download="API for Veterinary Use - PAHK (Jan 1, 2025).pdf"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
          >
            Download API List for Veterinary Use <Download className="ml-2 h-5 w-5" />
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Custom Product Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300">
              Can't Find What You Need?
            </h2>
            <p className="mt-4 text-lg text-page">
              If you can't find the product you're looking for, we can help. Tell us your desired product, and we'll
              work on getting it synthesized for you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
              >
                Contact Us for Custom Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to discuss your animal health raw material needs?
              <span className="block text-xl font-medium mt-2">
                Our team is here to help you find the right solutions.
              </span>
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
