"use client";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import FadeInSection from "@/components/fade-in-section";
import { useTranslations } from "@/translations";

export default function AboutUs() {
  const { t } = useTranslations();

  return (
    <FadeInSection>
      <div className="bg-page">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/about-hero.jpg"
              alt="Agricultural landscape"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t("about.hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-xl">{t("about.hero.subtitle")}</p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
              {t("about.company.title")}
            </h2>
          </div>
          <div className="mt-8 text-lg text-page">
            <p>{t("about.company.content.0")}</p>
            <p className="mt-4">{t("about.company.content.1")}</p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
                {t("about.journey.title")}
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-page">
                {t("about.journey.subtitle")}
              </p>
            </div>
            <div className="mt-12 space-y-8">
              {t("about.journey.milestones").map((milestone: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-500 dark:bg-green-600 text-white">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {milestone.year}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Sourcing Excellence */}
        <div className="bg-page py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
                {t("about.sourcing.title")}
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-page">
                {t("about.sourcing.subtitle")}
              </p>
            </div>
            <div className="mt-8 text-lg text-page">
              <p>{t("about.sourcing.content.0")}</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {t("about.sourcing.list").map((item: any, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-6">{t("about.sourcing.conclusion.0")}</p>
              <p className="mt-4 font-semibold">
                {t("about.sourcing.conclusion.1")}
              </p>
            </div>
          </div>
        </div>

        {/* Global Network Map */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
                {t("about.network.title")}
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-page">
                {t("about.network.subtitle")}
              </p>
            </div>
            <div className="mt-12">
              <Image
                src="/images/design-mode/Super%20Map.png"
                alt="Pacific Agriscience Global Network Map"
                width={1920}
                height={1080}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300 sm:text-4xl">
                {t("about.values.title")}
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-lg text-page">
                {t("about.values.subtitle")}
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t("about.values.items").map((value: any, index: number) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                >
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
