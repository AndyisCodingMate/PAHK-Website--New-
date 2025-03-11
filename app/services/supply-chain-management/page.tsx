'use client';
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function SupplyChainManagement() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Supply Chain Management"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Supply Chain Management</h1>
          <p className="mt-6 max-w-xl text-xl">End-to-end supply chain solutions for agricultural products.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Supply Chain Management Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Pacific Agriscience offers comprehensive supply chain management services to optimize your agricultural
          operations. Our services include:
        </p>
        <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
          <li>Supply chain strategy and design</li>
          <li>Inventory optimization and management</li>
          <li>Logistics and transportation planning</li>
          <li>Warehouse management and distribution</li>
          <li>Supply chain risk management</li>
          <li>Technology integration for supply chain visibility</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to optimize your agricultural supply chain?
              <span className="block text-xl font-medium mt-2">Let's discuss how we can improve your operations.</span>
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

