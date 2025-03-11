'use client';
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Globe, TrendingUp, ShieldCheck } from "lucide-react"
import HeroSlideshow from "@/components/hero-slideshow"
import FadeInSection from "@/components/fade-in-section"
import { useTranslations } from "@/translations"

export default function Home() {
  const { t } = useTranslations()

  return (
    <FadeInSection>
      <div className="flex flex-col min-h-screen">
        <HeroSlideshow />
        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-page">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
                {t("home.features.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-page">{t("home.features.subtitle")}</p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />,
                  title: t("home.features.items.0.title"),
                  description: t("home.features.items.0.description"),
                },
                {
                  icon: <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />,
                  title: t("home.features.items.1.title"),
                  description: t("home.features.items.1.description"),
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />,
                  title: t("home.features.items.2.title"),
                  description: t("home.features.items.2.description"),
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />,
                  title: t("home.features.items.3.title"),
                  description: t("home.features.items.3.description"),
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-page">{feature.title}</h3>
                  <p className="mt-2 text-base text-page">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products and Services Preview */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
                {t("home.productsPreview.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-page">{t("home.productsPreview.subtitle")}</p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: t("home.productsPreview.items.0.title"),
                  description: t("home.productsPreview.items.0.description"),
                  image:
                    "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
                  link: "/generic-products",
                },
                {
                  title: t("home.productsPreview.items.1.title"),
                  description: t("home.productsPreview.items.1.description"),
                  image:
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  link: "/services/registration-services",
                },
                {
                  title: t("home.productsPreview.items.2.title"),
                  description: t("home.productsPreview.items.2.description"),
                  image:
                    "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                  link: "/services/agricultural-consulting",
                },
                {
                  title: t("home.productsPreview.items.3.title"),
                  description: t("home.productsPreview.items.3.description"),
                  image:
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  link: "/services/supply-chain-solutions",
                },
                {
                  title: t("home.productsPreview.items.4.title"),
                  description: t("home.productsPreview.items.4.description"),
                  image:
                    "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                  link: "/specialty-products",
                },
                {
                  title: t("home.productsPreview.items.5.title"),
                  description: t("home.productsPreview.items.5.description"),
                  image:
                    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  link: "/fertilizer-raw-materials",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-700 p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">Learn more</span>
                      <ArrowRight className="ml-1 h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/products-and-services"
                className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                {t("home.productsPreview.viewAll")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </FadeInSection>
  )
}

