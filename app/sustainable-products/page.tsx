"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { useTranslations } from "@/translations";

export default function SustainableProducts() {
  const { t } = useTranslations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sustainableProducts = [
    {
      name: "Nonanoic Acid Herbicide",
      description:
        "An organic herbicide with active ingredients extracted from rose, geranium leaves, and lavender. Provides effective weed control with minimal environmental impact.",
    },
    {
      name: "Biological Insecticide and Biofertilizer",
      description:
        "Natural insect control solutions including Bacillus Thuringiensis strains and microbial fertilizers that enhance crop immunity and increase yields.",
    },
    {
      name: "Biological Fungicide",
      description:
        "Eco-friendly fungal disease control using beneficial microorganisms like Bacillus Amyloliquefaciens and Trichoderma.",
    },
    {
      name: "Pacific Cal",
      description:
        "A natural gypsum product with IFOAM Organic Certification, used as a soil conditioner and secondary fertilizer.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Sustainable Products"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sustainable Products
          </h1>
          <p className="mt-6 max-w-xl text-xl">
            Environmentally responsible agricultural solutions for a greener
            future.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-green-800">
          Our Sustainable Products
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          At Pacific Agriscience, we are committed to developing and providing
          sustainable agricultural products that minimize environmental impact
          while maximizing effectiveness. Our sustainable product line includes
          organic herbicides, biological insecticides, biofertilizers, and
          natural soil conditioners.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {sustainableProducts.map((product: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-green-800">
            Product Brochure
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Our comprehensive brochure provides detailed information about our
            sustainable product portfolio, including technical specifications,
            application guidelines, and benefits.
          </p>
          <div className="mt-6">
            <a
              href="/Sustainable Products Brochure.pdf"
              download="PAHK - Sustainable Products Brochure.pdf"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700 transition-colors"
            >
              Download Brochure <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-green-800">
            Benefits of Sustainable Agriculture
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">
                Environmental Protection
              </h3>
              <p className="mt-2 text-gray-600">
                Our sustainable products help reduce chemical runoff, protect
                beneficial organisms, and preserve biodiversity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">
                Long-term Soil Health
              </h3>
              <p className="mt-2 text-gray-600">
                Biological products improve soil structure, enhance nutrient
                cycling, and promote beneficial microorganisms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">
                Regulatory Compliance
              </h3>
              <p className="mt-2 text-gray-600">
                Stay ahead of evolving regulations with products that meet or
                exceed environmental standards and organic certifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transition to sustainable agriculture?
              <span className="block text-xl font-medium mt-2">
                Our team can help you select the right products for your needs.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-700 hover:bg-gray-50 transition-colors"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
