"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, User, MessageSquare } from "lucide-react";
import FadeInSection from "@/components/fade-in-section";
import { useTranslations } from "@/translations";
import { sendContactEmail } from "@/app/actions/send-email";

export default function ContactUs() {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        alert(t("contact.form.success"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        alert(t("contact.form.error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t("contact.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeInSection>
      <div className="bg-page">
        {/* Hero Section */}
        <div className="bg-green-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t("contact.hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-xl">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>

        {/* Contact Information and Form */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">
                {t("contact.getInTouch.title")}
              </h2>
              <p className="mt-4 text-lg text-page">
                {t("contact.getInTouch.subtitle")}
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3 text-base text-page">
                    <dt className="font-medium">
                      {t("contact.getInTouch.address.label")}
                    </dt>
                    <dd className="mt-1">
                      Room 2006-8, 20/F, TWO CHINACHEM EXCHANGE SQUARE
                      <br />
                      338 KING'S ROAD, NORTH POINT, HONG KONG
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3 text-base text-page">
                    <dt className="font-medium">
                      {t("contact.getInTouch.phone.label")}
                    </dt>
                    <dd className="mt-1">(+852) 2528 5926</dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3 text-base text-page">
                    <dt className="font-medium">
                      {t("contact.getInTouch.hours.label")}
                    </dt>
                    <dd className="mt-1">
                      {t("contact.getInTouch.hours.value")}
                    </dd>
                  </div>
                </div>
              </dl>

              {/* Staff Information */}
              <h3 className="mt-12 text-xl font-bold text-green-700 dark:text-green-300">
                {t("contact.team.title")}
              </h3>
              <dl className="mt-4 space-y-6">
                {t("contact.team.members").map((member: any, index: number) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <User className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3 text-base text-page">
                      <dt className="font-medium">{member.name}</dt>
                      <dd className="mt-1">
                        {member.details.map(
                          (detail: any, detailIndex: number) => (
                            <div key={detailIndex}>{detail}</div>
                          ),
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              {/* Social Media Contact */}
              <h3 className="mt-12 text-xl font-bold text-green-700 dark:text-green-300">
                {t("contact.connect.title")}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-8">
                {/* WhatsApp */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-page">
                      {t("contact.connect.whatsapp")}
                    </span>
                  </div>
                  <Image
                    src="/images/design-mode/candy whatsapp QR.png"
                    alt="WhatsApp QR Code"
                    width={150}
                    height={150}
                    className="rounded-lg"
                    unoptimized
                  />
                  <a
                    href="https://api.whatsapp.com/send/?phone=85293221317&text&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                  >
                    {t("contact.connect.whatsapp")}
                  </a>
                </div>

                {/* WeChat */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-page">
                      {t("contact.connect.wechat")}
                    </span>
                  </div>
                  <Image
                    src="/images/design-mode/candy wechat QR.png"
                    alt="WeChat QR Code"
                    width={150}
                    height={150}
                    className="rounded-lg"
                    unoptimized
                  />
                  <p className="text-page">
                    {t("contact.connect.wechatId")}{" "}
                    <span className="font-medium">candyysh0528</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">
                {t("contact.form.title")}
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.name")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.email")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.phone")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.company")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("contact.form.message")}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? t("contact.form.sending")
                      : t("contact.form.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
