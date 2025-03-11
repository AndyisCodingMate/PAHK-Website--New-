"use client"

import type React from "react"

import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/translations"
import { useEffect, useState } from "react"

interface TranslatedContentProps {
  children: React.ReactNode
  translationKey?: string
}

export default function TranslatedContent({ children, translationKey }: TranslatedContentProps) {
  const { language } = useLanguage()
  const { t } = useTranslations()
  const [content, setContent] = useState<React.ReactNode>(children)

  useEffect(() => {
    if (translationKey) {
      setContent(t(translationKey))
    }
  }, [translationKey, t])

  return <>{content}</>
}

