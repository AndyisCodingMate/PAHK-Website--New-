'use client';

import Image from "next/image"
import Link from "next/link"

export default function CropTrading() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Crop Trading"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Crop Trading</h1>
          <p className="mt-6 max-w-xl text-xl">
            Connecting producers with buyers for a wide range of agricultural crops.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Crop Trading Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          At Pacific Agriscience, we specialize in connecting agricultural producers with buyers worldwide. Our crop
          trading services include:
        </p>
        <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
          <li>Market analysis and price forecasting</li>
          <li>Quality assurance and product certification</li>
          <li>Logistics and supply chain management</li>
          <li>Risk management and hedging strategies</li>
          <li>Contract negotiation and execution</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to optimize your crop trading?
              <span className="block text-xl font-medium mt-2">
                Let's discuss how we can support your agricultural business.
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

