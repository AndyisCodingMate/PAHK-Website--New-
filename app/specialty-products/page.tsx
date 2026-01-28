"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function SpecialtyProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialtyProducts = [
    {
      name: "KRYSTAPHYTE™",
      description:
        "A mono potassium phosphite product designed to enhance plant defense mechanisms, improve nutrient health, and provide fungicidal activity against various pathogens.",
      brochure: "/KRYSTAPHYTE Brochure.pdf",
    },
    {
      name: "PACIFIC OIL™",
      description:
        "A botanical oil-based miticide/insecticide for controlling Mites, Aphids, Whitefly, Scale, and Citrus leaf miner in various horticultural crops.",
      brochure: "/PACIFIC OIL Brochure.pdf",
    },
    {
      name: "PACIFIC CAL™",
      description:
        "A specialized calcium-based product for improving fruit quality and plant health.",
      brochure: "/PACIFIC CAL Brochure.pdf",
    },
    {
      name: "PACIFIC POWER™",
      description:
        "A bio-organic granule with unique biological activator complex, designed to blend with chemical fertilizers for improved crop yield and soil health.",
      brochure: "/PACIFIC POWER Brochure.pdf",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Specialty Products"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Specialty Products
          </h1>
          <p className="mt-6 max-w-xl text-xl">
            Unique products registered and marketed through local networks of
            dealers.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-green-800">
          Our Specialty Products
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover our range of innovative specialty products designed to meet
          specific agricultural needs.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {specialtyProducts.map((product: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">
                {product.name}
              </h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4">
                <a
                  href={product.brochure}
                  download={`${product.name} Brochure.pdf`}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  Download Brochure <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products Section */}
        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-green-800">
            Looking for More?
          </h3>
          <p className="mt-2 text-lg text-gray-700">
            Our range of specialty products extends beyond what's listed here.
            If you're interested in learning about our full range of specialty
            products or have specific requirements, we encourage you to get in
            touch with our team.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700 transition-colors"
            >
              Inquire About More Products{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need more information about our specialty products?
              <span className="block text-xl font-medium mt-2">
                Our team is ready to assist you with any questions.
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
  );
}
