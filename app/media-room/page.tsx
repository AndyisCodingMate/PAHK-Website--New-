'use client';

import Image from "next/image"
import { Clock } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { useTranslations } from "@/translations"

export default function MediaRoom() {
  const { t } = useTranslations()

  return (
    <FadeInSection>
      <div className="bg-page">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Media room background"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("navigation.mediaRoom")}</h1>
            <p className="mt-6 max-w-xl text-xl">{t("mediaRoom.subtitle")}</p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {t("common.comingSoon")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t("mediaRoom.comingSoonMessage")}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <Clock className="h-6 w-6 mr-2" />
                  <span className="text-lg font-semibold">{t("common.stayTuned")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}
