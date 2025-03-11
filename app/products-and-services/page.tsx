'use client';

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { useTranslations } from "@/translations"

export default function ProductsAndServices() {
  const { t } = useTranslations()

  return (
    <FadeInSection>
      <div className="bg-page">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Agricultural products"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("products.hero.title")}</h1>
            <p className="mt-6 max-w-xl text-xl">{t("products.hero.subtitle")}</p>
          </div>
        </div>

        {/* Overview */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
              {t("products.overview.title")}
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-page">{t("products.overview.subtitle")}</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">{t("products.products.title")}</h2>
            <p className="mt-4 text-lg text-page">{t("products.products.subtitle")}</p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t("products.products.items").map((product, index) => (
                <Link
                  key={index}
                  href={
                    [
                      "/generic-products",
                      "/specialty-products",
                      "/high-performance-chemicals",
                      "/animal-health-raw-materials",
                      "/fertilizer-raw-materials",
                    ][index]
                  }
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={
                        [
                          "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
                          "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F-Raw%20%282%29.jpg-GXxlaUaMk3mHSqxm4CxdiW7Uc5wJ4Y.jpeg",
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A-Raw.jpg-djyned93w6Wg9EG7m6U1H8qgRpB3dF.jpeg",
                          "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        ][index] || "/placeholder.svg"
                      }
                      alt={product.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-700 p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.title}</h3>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{product.description}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {t("common.learnMore")}
                      </span>
                      <ArrowRight className="ml-1 h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white dark:bg-gray-900 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">{t("products.services.title")}</h2>
            <p className="mt-4 text-lg text-page">{t("products.services.subtitle")}</p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t("products.services.items").map((service, index) => (
                <Link
                  key={index}
                  href={
                    [
                      "/services/registration-services",
                      "/services/market-intelligence",
                      "/services/supply-chain-management",
                    ][index]
                  }
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={
                        [
                          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
                          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                        ][index] || "/placeholder.svg"
                      }
                      alt={service.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-700 p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{service.description}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {t("common.learnMore")}
                      </span>
                      <ArrowRight className="ml-1 h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-700 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t("common.readyToDiscuss")}
                <span className="block text-xl font-medium mt-2">{t("common.ourTeamHelp")}</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-700 hover:bg-gray-50 transition-colors"
                  >
                    {t("common.contactUs")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

