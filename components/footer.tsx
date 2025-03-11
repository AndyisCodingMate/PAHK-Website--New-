import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { useTranslations } from "@/translations"

export default function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAHK-ramUWkZ2TRivzoC4joztte37X4bMhw.png"
              alt="Pacific Agriscience Logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 text-sm text-gray-300">{t("footer.description")}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("footer.contact")}</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Room 2006-8, 20/F, TWO CHINACHEM EXCHANGE SQUARE
                  <br />
                  338 KING'S ROAD, NORTH POINT, HONG KONG
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-sm">+852 9322 1317 / +852 2528 5926</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-sm">
                  candy@pacificagriscience.com
                  <br />
                  pahk@biznetvigator.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("footer.quickLinks")}</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: t("navigation.home"), href: "/" },
                { name: t("navigation.aboutUs"), href: "/about-us" },
                { name: t("navigation.productsAndServices"), href: "/products-and-services" },
                { name: t("navigation.contactUs"), href: "/contact-us" },
                { name: t("navigation.mediaRoom"), href: "/media-room" },
                { name: t("navigation.appendix"), href: "/appendix" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-400">
            {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

