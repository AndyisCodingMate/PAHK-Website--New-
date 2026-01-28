"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/translations";

export default function HighPerformanceChemicals() {
  const { t } = useTranslations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/design-mode/f-raw.jpg"
            alt="High Performance Chemicals"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t("products.products.items.2.title")}
          </h1>
          <p className="mt-6 max-w-xl text-xl">
            {t("products.products.items.2.description")}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {t("products.products.items.2.title")}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {t("common.pageUnderConstruction")}
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("common.interestedInOurProducts")}
              <span className="block text-xl font-medium mt-2">
                {t("common.ourTeamHelp")}
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-700 hover:bg-gray-50 transition-colors"
                >
                  {t("common.getInTouch")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
