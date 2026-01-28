'use client';

import { ArrowRight, Download, ExternalLink } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { useTranslations } from "@/translations"

export default function Appendix() {
  const { t } = useTranslations()

  const documents = [
    {
      title: "Slideshare on Chinese AgChem Manufacturers",
      description: "Presentation on Chinese AgChem Manufacturers going downstream",
      link: "https://www.slideshare.net/PacificAgriscience/chinese-agchem-manufacturers-going-downstream-v2-19102012",
      icon: <ExternalLink className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: true,
    },
    {
      title: "Live Speech by CS Liew on Chinese AgChem Manufacturers",
      description: "Video of CS Liew's speech on Chinese AgChem Manufacturers",
      link: "https://www.youtube.com/watch?v=LPM3agsN0tM&t=2s",
      icon: <ExternalLink className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: true,
    },
    {
      title: "Generic Products PDF",
      description: "List of Generic Pesticide Products (2024)",
      link: "/List of Generic Pesticide Products (2024).pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "List of Generic Pesticide Products (2024).pdf",
    },
    {
      title: "Good Laboratory Practice (GLP) Report",
      description: "List of GLP Report - Updated on Jan 5, 2025",
      link: "/GLP Report.pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "GLP Report.pdf",
    },
    {
      title: "Fertilizer Brochure",
      description: "Fertilizer brochure (Updated 2023)",
      link: "/PAHK Fertilizer brochure (2023).pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "PAHK Fertilizer brochure (2023).pdf",
    },
    {
      title: "API for Veterinary Use",
      description: "API for Veterinary Use - PAHK (Jan 1, 2025)",
      link: "/API for Veterinary Use - PAHK (Jan 1, 2025).pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "API for Veterinary Use - PAHK (Jan 1, 2025).pdf",
    },
    {
      title: "KRYSTAPHYTE™ Brochure",
      description: "Information on our mono potassium phosphite product",
      link: "/KRYSTAPHYTE Brochure.pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "KRYSTAPHYTE Brochure.pdf",
    },
    {
      title: "PACIFIC OIL™ Brochure",
      description: "Details on our botanical oil-based miticide/insecticide",
      link: "/PACIFIC OIL Brochure.pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "PACIFIC OIL Brochure.pdf",
    },
    {
      title: "PACIFIC CAL™ Brochure",
      description: "Information on our specialized calcium-based product",
      link: "/PACIFIC CAL Brochure.pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "PACIFIC CAL Brochure.pdf",
    },
    {
      title: "PACIFIC POWER™ Brochure",
      description: "Details on our bio-organic granule for blending with chemical fertilizers",
      link: "/PACIFIC POWER Brochure.pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "PACIFIC POWER Brochure.pdf",
    },
    {
      title: "Sustainable Products Brochure",
      description: "PAHK - New Products Portfolio (Sustainable Products) - Updated on Apr 21, 2025",
      link: "/Sustainable Products Brochure.pdf",
      icon: <Download className="h-6 w-6 text-green-600 dark:text-green-400" />,
      isExternal: false,
      filename: "PAHK - Sustainable Products Brochure.pdf",
    },
  ]

  return (
    <FadeInSection>
      <div className="bg-page">
        {/* Hero Section */}
        <div className="bg-green-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("navigation.appendix")}</h1>
            <p className="mt-6 max-w-xl text-xl">{t("appendix.subtitle")}</p>
          </div>
        </div>

        {/* Documents Section */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300">
            {t("appendix.documentsAndResources")}
          </h2>
          <p className="mt-4 text-lg text-page">{t("appendix.documentsDescription")}</p>

          <div className="mt-12 space-y-6">
            {documents.map((item: any, index: number) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-shrink-0 mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                  <div className="mt-4">
                    <a
                      href={item.link}
                      target={item.isExternal ? "_blank" : "_self"}
                      rel={item.isExternal ? "noopener noreferrer" : ""}
                      className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                      download={item.isExternal ? undefined : item.filename}
                    >
                      {item.isExternal ? t("common.visitWebsite") : t("common.downloadPDF")}
                      <ArrowRight className="ml-1 h-4 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
