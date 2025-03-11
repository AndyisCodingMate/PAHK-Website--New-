"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import { useTranslations } from "@/translations"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products and Services", href: "/products-and-services" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Media Room", href: "/media-room" },
  { name: "Appendix", href: "/appendix" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslations()

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.aboutUs"), href: "/about-us" },
    { name: t("navigation.productsAndServices"), href: "/products-and-services" },
    { name: t("navigation.contactUs"), href: "/contact-us" },
    { name: t("navigation.mediaRoom"), href: "/media-room" },
    { name: t("navigation.appendix"), href: "/appendix" },
  ]

  return (
    <header className="bg-card shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pacific Agriscience Hong Kong Company Limited</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAHK-ramUWkZ2TRivzoC4joztte37X4bMhw.png"
              alt="Pacific Agriscience Logo"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-card"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-card hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Pacific Agriscience Hong Kong Company Limited</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAHK-ramUWkZ2TRivzoC4joztte37X4bMhw.png"
                  alt="Pacific Agriscience Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-card"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-card hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex items-center gap-4">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

