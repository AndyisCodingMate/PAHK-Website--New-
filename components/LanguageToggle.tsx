"use client"

import { useState } from "react"
import { useLanguage, type Language } from "@/contexts/LanguageContext"
import { ChevronDown } from "lucide-react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English" },
    { code: "zh-TW", name: "繁體中文" },
    { code: "zh-CN", name: "简体中文" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        aria-label="Select language"
      >
        <span className="text-sm">{currentLanguage?.name}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm ${
                language === lang.code
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
