"use client"

import type { Language } from "@/contexts/LanguageContext"
import { useLanguage } from "@/contexts/LanguageContext"

type TranslationKey =
  | "navigation"
  | "home"
  | "about"
  | "products"
  | "contact"
  | "footer"
  | "common"
  | "mediaRoom"
  | "appendix"

type NavigationTranslation = {
  home: string
  aboutUs: string
  productsAndServices: string
  contactUs: string
  mediaRoom: string
  appendix: string
}

type HomeTranslation = {
  hero: {
    slides: Array<{
      title: string
      description: string
      buttonText: string
    }>
  }
  features: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  productsPreview: {
    title: string
    subtitle: string
    viewAll: string
    items: Array<{
      title: string
      description: string
    }>
  }
}

type AboutTranslation = {
  hero: {
    title: string
    subtitle: string
  }
  company: {
    title: string
    content: string[]
  }
  journey: {
    title: string
    subtitle: string
    milestones: Array<{
      year: number
      event: string
    }>
  }
  sourcing: {
    title: string
    subtitle: string
    content: string[]
    list: string[]
    conclusion: string[]
  }
  network: {
    title: string
    subtitle: string
  }
  values: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
}

type ProductsTranslation = {
  hero: {
    title: string
    subtitle: string
  }
  overview: {
    title: string
    subtitle: string
  }
  products: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  services: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
}

type ContactTranslation = {
  hero: {
    title: string
    subtitle: string
  }
  getInTouch: {
    title: string
    subtitle: string
    address: {
      label: string
    }
    phone: {
      label: string
    }
    hours: {
      label: string
      value: string
    }
  }
  team: {
    title: string
    members: Array<{
      name: string
      details: string[]
    }>
  }
  connect: {
    title: string
    whatsapp: string
    wechat: string
    wechatId: string
  }
  form: {
    title: string
    name: string
    email: string
    phone: string
    company: string
    subject: string
    message: string
    submit: string
    success: string
    error: string
    sending: string
  }
}

type FooterTranslation = {
  description: string
  contact: string
  quickLinks: string
  copyright: string
}

type CommonTranslation = {
  learnMore: string
  contactUs: string
  readyToDiscuss: string
  ourTeamHelp: string
  pageUnderConstruction: string
  interestedInOurProducts: string
  getInTouch: string
  comingSoon: string
  stayTuned: string
  visitWebsite: string
  downloadPDF: string
}

type MediaRoomTranslation = {
  subtitle: string
  comingSoonMessage: string
}

type AppendixTranslation = {
  subtitle: string
  documentsAndResources: string
  documentsDescription: string
  documents: Array<{
    title: string
    description: string
  }>
}

type Translations = {
  [key in Language]: {
    navigation: NavigationTranslation
    home: HomeTranslation
    about: AboutTranslation
    products: ProductsTranslation
    contact: ContactTranslation
    footer: FooterTranslation
    common: CommonTranslation
    mediaRoom?: MediaRoomTranslation
    appendix?: AppendixTranslation
  }
}

export const translations: Translations = {
  en: {
    navigation: {
      home: "Home",
      aboutUs: "About Us",
      productsAndServices: "Products and Services",
      contactUs: "Contact Us",
      mediaRoom: "Media Room",
      appendix: "Appendix",
    },
    home: {
      hero: {
        slides: [
          {
            title: "Innovative Agricultural Solutions",
            description: "Connecting producers with global markets through innovative trading solutions.",
            buttonText: "Our Services",
          },
          {
            title: "Sustainable Practices",
            description: "Promoting environmentally responsible agricultural trading across the Asia-Pacific region.",
            buttonText: "Learn More",
          },
          {
            title: "Global Network",
            description: "Our extensive network connects agricultural producers with markets worldwide.",
            buttonText: "Our Products",
          },
          {
            title: "Quality Assurance",
            description: "Ensuring the highest standards in agricultural products and services.",
            buttonText: "Our Commitment",
          },
        ],
      },
      features: {
        title: "Why Choose Pacific Agriscience",
        subtitle:
          "We provide comprehensive agricultural trading solutions with a focus on sustainability and innovation.",
        items: [
          {
            title: "Sustainable Practices",
            description: "We prioritize environmentally responsible agricultural trading solutions.",
          },
          {
            title: "Global Network",
            description: "Our extensive network connects producers with markets worldwide.",
          },
          {
            title: "Market Expertise",
            description: "Deep industry knowledge to navigate complex agricultural markets.",
          },
          {
            title: "Quality Assurance",
            description: "Rigorous standards ensure the highest quality agricultural products.",
          },
        ],
      },
      productsPreview: {
        title: "Our Products & Services",
        subtitle: "Discover our comprehensive range of agricultural trading solutions.",
        viewAll: "View All Products & Services",
        items: [
          {
            title: "Generic Products",
            description: "A wide range of high-quality generic pesticide products for various agricultural needs.",
          },
          {
            title: "Registration Services",
            description: "Expert assistance in registering agricultural products in various markets.",
          },
          {
            title: "Sustainable Products",
            description: "Environmentally responsible agricultural solutions for a greener future.",
          },
          {
            title: "Supply Chain Solutions",
            description: "Optimizing agricultural supply chains for efficiency and sustainability.",
          },
          {
            title: "Specialty Products",
            description: "Unique products registered and marketed through local networks of dealers.",
          },
          {
            title: "Fertilizer Raw Materials",
            description: "High-quality raw materials for fertilizer production.",
          },
        ],
      },
    },
    about: {
      hero: {
        title: "About Us",
        subtitle: '"Caring & Sharing" - It\'s what we do best',
      },
      company: {
        title: "Our Company",
        content: [
          "Pacific Agriscience (PAHK) devotes to provide farmers and the agricultural chemical supply-chain with cost-effective generic pesticides and innovative speciality agricultural chemicals. With associate companies in Singapore and Australia, our cohesive global cooperative network covers over 50 cities worldwide.",
          "We are proficient in marketing generic pesticides, fertiliser raw materials, speciality agrochemicals and industrial speciality chemicals. Our team also develop markets for a range of proprietary agrochemicals and seek national distributors for these products.",
        ],
      },
      journey: {
        title: "Our Journey",
        subtitle: "Key moments in the growth and expansion of Pacific Agriscience",
        milestones: [
          {
            year: 1998,
            event: "Pacific Agriscience Pte Ltd was established in Singapore",
          },
          {
            year: 2001,
            event: "Pacific Agriscience Pty Ltd was established in Australia",
          },
          {
            year: 2019,
            event:
              "Pacific Agriscience Hong Kong Company Limited was formed to handle the trading business of the company",
          },
        ],
      },
      sourcing: {
        title: "Our Sourcing Excellence",
        subtitle: "Transforming sourcing challenges into opportunities for our clients.",
        content: [
          "At Pacific Agriscience, we specialize in sourcing and supplying generic pesticides, specialty agrochemicals, and high-performance chemicals. Our comprehensive approach includes:",
        ],
        list: [
          "Monitoring product availability and market trends",
          "Conducting thorough plant audits for quality control",
          "Obtaining necessary data for product registration",
          "Performing pre-shipment product analysis to ensure quality",
          "Offering credit terms and product guarantees",
        ],
        conclusion: [
          "Our primary objective is to prevent off-spec products through a meticulous sourcing process. In the rare event of quality issues, we commit to compensation or replacement, allowing our clients to focus on their core business of marketing and distribution.",
          "With 85% of our sales turnover derived from client referrals, our reputation speaks for itself. Let us add value to your business and address your product sourcing needs promptly and efficiently.",
        ],
      },
      network: {
        title: "Global Network Relation Atlas",
        subtitle: "Our extensive network spans across continents, enabling us to serve clients worldwide.",
      },
      values: {
        title: "Our Values",
        subtitle: "These core principles guide our business operations and relationships.",
        items: [
          {
            title: "Caring",
            description: "We prioritize the needs of our clients and the agricultural community.",
          },
          {
            title: "Sharing",
            description: "We believe in sharing knowledge and resources to promote mutual growth.",
          },
          {
            title: "Excellence",
            description: "We strive for excellence in all aspects of our service delivery.",
          },
          {
            title: "Innovation",
            description: "We continuously seek innovative solutions to meet evolving market needs.",
          },
        ],
      },
    },
    products: {
      hero: {
        title: "Products & Services",
        subtitle: "Comprehensive agricultural trading solutions tailored to your needs.",
      },
      overview: {
        title: "Our Comprehensive Solutions",
        subtitle:
          "Pacific Agriscience offers a wide range of products and services designed to meet the diverse needs of agricultural businesses.",
      },
      products: {
        title: "Our Products",
        subtitle:
          "We offer a variety of agrochemical products, utilizing our global network and years of experience to bring you the latest and finest quality products on the market.",
        items: [
          {
            title: "Generic Products",
            description: "A wide range of generic pesticide products for various agricultural needs.",
          },
          {
            title: "Specialty Products",
            description: "Unique products registered and marketed through local networks of dealers.",
          },
          {
            title: "High Performance Chemicals",
            description: "Advanced chemical solutions for optimal agricultural performance.",
          },
          {
            title: "Animal Health Raw Materials",
            description: "Raw materials for medicine used in the veterinary industry.",
          },
          {
            title: "Fertilizer Raw Materials",
            description: "High-quality raw materials for fertilizer production.",
          },
          {
            title: "Sustainable Products",
            description: "Environmentally responsible agricultural solutions for a greener future.",
          },
        ],
      },
      services: {
        title: "Our Services",
        subtitle: "We provide comprehensive services to support agricultural businesses throughout the supply chain.",
        items: [
          {
            title: "Registration Services",
            description: "Expert assistance in registering agricultural products in various markets.",
          },
          {
            title: "Market Intelligence",
            description: "Insights and analysis on agricultural market trends and opportunities.",
          },
          {
            title: "Supply Chain Management",
            description: "End-to-end supply chain solutions for agricultural products.",
          },
        ],
      },
      cta: {
        title: "Ready to discuss your specific needs?",
        subtitle: "Our team is here to help you find the right solutions.",
        button: "Contact Us",
      },
    },
    contact: {
      hero: {
        title: "Contact Us",
        subtitle: "Get in touch with our team to discuss how we can support your agricultural business.",
      },
      getInTouch: {
        title: "Get in Touch",
        subtitle:
          "Our team is ready to answer your questions and discuss how our products and services can meet your needs.",
        address: {
          label: "Address",
        },
        phone: {
          label: "Phone",
        },
        hours: {
          label: "Office Hours",
          value: "9:00 am to 7:00 pm (GMT +8:00)",
        },
      },
      team: {
        title: "Our Team",
        members: [
          {
            name: "Candy Yeung, Manager",
            details: [
              "Phone (Hong Kong): (+852) 9322 1317",
              "Phone (China): (+86) 176 7534 0802",
              "Email: candy@pacificagriscience.com / pahk@biznetvigator.com",
            ],
          },
          {
            name: "Stanley Poon, Administration and Logistics",
            details: ["Phone (Hong Kong): (+852) 6303 3499", "Email: pahksp@biznetvigator.com"],
          },
        ],
      },
      connect: {
        title: "Connect With Us",
        whatsapp: "WhatsApp",
        wechat: "WeChat",
        wechatId: "WeChat ID:",
      },
      form: {
        title: "Send Us a Message",
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        success: "Thank you for your message. We will get back to you soon!",
        error: "Sorry, there was an error sending your message. Please try again or contact us directly.",
        sending: "Sending...",
      },
    },
    footer: {
      description:
        "Pacific Agriscience (Hong Kong) Company Limited provides innovative agricultural chemical solutions across the globe.",
      contact: "Contact",
      quickLinks: "Quick Links",
      copyright: "© {year} Pacific Agriscience (Hong Kong) Company Limited. All rights reserved.",
    },
    common: {
      learnMore: "Learn More",
      contactUs: "Contact Us",
      readyToDiscuss: "Ready to discuss your specific needs?",
      ourTeamHelp: "Our team is here to help you find the right solutions.",
      pageUnderConstruction:
        "This page is under construction. We're working on bringing you detailed information. Please check back soon or contact us for more information.",
      interestedInOurProducts: "Interested in our high performance chemical solutions?",
      getInTouch: "Get in Touch",
      comingSoon: "Coming Soon",
      stayTuned: "Stay tuned!",
      visitWebsite: "Visit Website",
      downloadPDF: "Download PDF",
    },
    mediaRoom: {
      subtitle: "Stay updated with the latest news, events, and insights from Pacific Agriscience.",
      comingSoonMessage:
        "We're currently working on bringing you the latest news, resources, and upcoming events. Check back soon for updates on Pacific Agriscience's activities and industry insights.",
    },
    appendix: {
      subtitle: "Additional resources, references, and supplementary information.",
      documentsAndResources: "Documents & Resources",
      documentsDescription: "Access important documents and resources related to our operations and industry.",
      documents: [],
    },
  },
  "zh-TW": {
    navigation: {
      home: "首頁",
      aboutUs: "關於我們",
      productsAndServices: "產品與服務",
      contactUs: "聯絡我們",
      mediaRoom: "媒體中心",
      appendix: "附錄",
    },
    home: {
      hero: {
        slides: [
          {
            title: "農業貿易解決方案",
            description: "通過創新的貿易解決方案將生產商與全球市場連接起來。",
            buttonText: "我們的服務",
          },
          {
            title: "可持續實踐",
            description: "在亞太地區推廣環保負責的農業貿易。",
            buttonText: "了解更多",
          },
          {
            title: "全球網絡",
            description: "我們廣泛的網絡將農業生產商與全球市場連接起來。",
            buttonText: "我們的產品",
          },
          {
            title: "品質保證",
            description: "確保農產品和服務的最高標準。",
            buttonText: "我們的承諾",
          },
        ],
      },
      features: {
        title: "為何選擇太平洋科農有限公司",
        subtitle: "我們提供全面的農業貿易解決方案，專注於可持續性和創新。",
        items: [
          {
            title: "可持續實踐",
            description: "我們優先考慮環保負責的農業貿易解決方案。",
          },
          {
            title: "全球網絡",
            description: "我們廣泛的網絡將生產商與全球市場連接起來。",
          },
          {
            title: "市場專業知識",
            description: "深厚的行業知識，助您駕馭複雜的農業市場。",
          },
          {
            title: "品質保證",
            description: "嚴格的標準確保最高品質的農產品。",
          },
        ],
      },
      productsPreview: {
        title: "我們的產品與服務",
        subtitle: "探索我們全面的農業貿易解決方案。",
        viewAll: "查看所有產品與服務",
        items: [
          {
            title: "通用產品",
            description: "各種高品質的通用農藥產品，滿足各種農業需求。",
          },
          {
            title: "註冊服務",
            description: "在各個市場註冊農產品的專業協助。",
          },
          {
            title: "可持續產品",
            description: "環保負責的農業解決方案，創造更綠色的未來。",
          },
          {
            title: "供應鏈解決方案",
            description: "優化農業供應鏈，提高效率和可持續性。",
          },
          {
            title: "專業產品",
            description: "通過本地經銷商網絡註冊和銷售的獨特產品。",
          },
          {
            title: "肥料原料",
            description: "高品質的肥料生產原料。",
          },
        ],
      },
    },
    about: {
      hero: {
        title: "關於我們",
        subtitle: '"關懷與分享" - 這是我們最擅長的',
      },
      company: {
        title: "我們的公司",
        content: [
          "太平洋科農有限公司（香港）致力於為農民和農業化學品供應鏈提供具成本效益的通用農藥和創新的特種農業化學品。我們在新加坡和澳洲設有聯營公司，我們緊密的全球合作網絡覆蓋全球超過50個城市。",
          "我們精通於銷售通用農藥、肥料原料、特種農業化學品和工業特種化學品。我們的團隊還為一系列專有農業化學品開發市場，並尋找這些產品的全國分銷商。",
        ],
      },
      journey: {
        title: "我們的歷程",
        subtitle: "太平洋科農有限公司成長和擴展的關鍵時刻",
        milestones: [
          {
            year: 1998,
            event: "太平洋科農有限公司私人有限公司在新加坡成立",
          },
          {
            year: 2001,
            event: "太平洋科農有限公司有限公司在澳洲成立",
          },
          {
            year: 2019,
            event: "太平洋科農有限公司成立，負責公司的貿易業務",
          },
        ],
      },
      sourcing: {
        title: "我們的採購卓越",
        subtitle: "將採購挑戰轉化為客戶的機會。",
        content: [
          "在太平洋科農有限公司，我們專注於採購和供應通用農藥、特種農業化學品和高性能化學品。我們的全面方法包括：",
        ],
        list: [
          "監控產品可用性和市場趨勢",
          "進行徹底的工廠審核以確保品質控制",
          "獲取產品註冊所需的必要數據",
          "進行出貨前產品分析以確保品質",
          "提供信用條款和產品保證",
        ],
        conclusion: [
          "我們的主要目標是通過精細的採購流程防止不合規格的產品。在罕見的品質問題情況下，我們承諾賠償或更換，讓我們的客戶能夠專注於他們的核心業務：市場營銷和分銷。",
          "我們85%的銷售額來自客戶推薦，我們的聲譽不言而喻。讓我們為您的業務增添價值，並及時高效地解決您的產品採購需求。",
        ],
      },
      network: {
        title: "全球網絡關係圖",
        subtitle: "我們廣泛的網絡跨越各大洲，使我們能夠為全球客戶提供服務。",
      },
      values: {
        title: "我們的價值觀",
        subtitle: "這些核心原則指導我們的業務運營和關係。",
        items: [
          {
            title: "關懷",
            description: "我們優先考慮客戶和農業社區的需求。",
          },
          {
            title: "分享",
            description: "我們相信分享知識和資源以促進共同成長。",
          },
          {
            title: "卓越",
            description: "我們在服務提供的各個方面都力求卓越。",
          },
          {
            title: "創新",
            description: "我們不斷尋求創新解決方案，以滿足不斷變化的市場需求。",
          },
        ],
      },
    },
    products: {
      hero: {
        title: "產品與服務",
        subtitle: "量身定制的全面農業貿易解決方案。",
      },
      overview: {
        title: "我們的全面解決方案",
        subtitle: "太平洋科農有限公司提供廣泛的產品和服務，旨在滿足農業企業的多樣化需求。",
      },
      products: {
        title: "我們的產品",
        subtitle: "我們提供各種農業化學產品，利用我們的全球網絡和多年經驗，為您帶來最新和最優質的產品。",
        items: [
          {
            title: "通用產品",
            description: "各種高品質的通用農藥產品，滿足各種農業需求。",
          },
          {
            title: "專業產品",
            description: "通過本地經銷商網絡註冊和銷售的獨特產品。",
          },
          {
            title: "高性能化學品",
            description: "用於最佳農業表現的先進化學解決方案。",
          },
          {
            title: "動物健康原料",
            description: "用於獸醫行業的藥物原料。",
          },
          {
            title: "肥料原料",
            description: "高品質的肥料生產原料。",
          },
          {
            title: "可持續產品",
            description: "環保負責的農業解決方案，創造更綠色的未來。",
          },
        ],
      },
      services: {
        title: "我們的服務",
        subtitle: "我們提供全面的服務，支持整個供應鏈的農業企業。",
        items: [
          {
            title: "註冊服務",
            description: "在各個市場註冊農產品的專業協助。",
          },
          {
            title: "市場情報",
            description: "關於農業市場趨勢和機會的見解和分析。",
          },
          {
            title: "供應鏈管理",
            description: "農產品的端到端供應鏈解決方案。",
          },
        ],
      },
      cta: {
        title: "準備好討論您的具體需求？",
        subtitle: "我們的團隊在此幫助您找到合適的解決方案。",
        button: "聯絡我們",
      },
    },
    contact: {
      hero: {
        title: "聯絡我們",
        subtitle: "與我們的團隊聯繫，討論我們如何支持您的農業業務。",
      },
      getInTouch: {
        title: "與我們聯繫",
        subtitle: "我們的團隊準備回答您的問題，並討論我們的產品和服務如何滿足您的需求。",
        address: {
          label: "地址",
        },
        phone: {
          label: "電話",
        },
        hours: {
          label: "辦公時間",
          value: "上午9:00至晚上7:00（GMT +8:00）",
        },
      },
      team: {
        title: "我們的團隊",
        members: [
          {
            name: "楊小姐，經理",
            details: [
              "電話（香港）：(+852) 9322 1317",
              "電話（中國）：(+86) 176 7534 0802",
              "電子郵件：candy@pacificagriscience.com / pahk@biznetvigator.com",
            ],
          },
          {
            name: "潘先生，行政和物流",
            details: ["電話（香港）：(+852) 6303 3499", "電子郵件：pahksp@biznetvigator.com"],
          },
        ],
      },
      connect: {
        title: "與我們連接",
        whatsapp: "WhatsApp",
        wechat: "微信",
        wechatId: "微信ID：",
      },
      form: {
        title: "發送訊息給我們",
        name: "姓名",
        email: "電子郵件",
        phone: "電話",
        company: "公司",
        subject: "主旨",
        message: "訊息",
        submit: "發送訊息",
        success: "感謝您的訊息。我們將盡快回覆您！",
        error: "抱歉，發送訊息時出現錯誤。請重試或直接聯繫我們。",
        sending: "發送中...",
      },
    },
    footer: {
      description: "太平洋科農有限公司在全球提供創新的農業化學解決方案。",
      contact: "聯絡",
      quickLinks: "快速連結",
      copyright: "© {year} 太平洋科農有限公司。版權所有。",
    },
    common: {
      learnMore: "了解更多",
      contactUs: "聯絡我們",
      readyToDiscuss: "準備好討論您的具體需求？",
      ourTeamHelp: "我們的團隊在此幫助您找到合適的解決方案。",
      pageUnderConstruction: "此頁面正在建設中。我們正在努力為您提供詳細信息。請稍後再查看或聯繫我們以獲取更多信息。",
      interestedInOurProducts: "對我們的高性能化學解決方案感興趣嗎？",
      getInTouch: "聯繫我們",
      comingSoon: "即將推出",
      stayTuned: "敬請期待！",
      visitWebsite: "訪問網站",
      downloadPDF: "下載PDF",
    },
    mediaRoom: {
      subtitle: "了解太平洋科農有限公司的最新新聞、活動和見解。",
      comingSoonMessage:
        "我們正在努力為您帶來最新的新聞、資源和即將舉行的活動。請稍後再來查看太平洋科農有限公司的活動和行業洞察更新。",
    },
    appendix: {
      subtitle: "額外資源、參考資料和補充信息。",
      documentsAndResources: "文件和資源",
      documentsDescription: "獲取與我們的運營和行業相關的重要文件和資源。",
      documents: [],
    },
  },
  "zh-CN": {
    navigation: {
      home: "首页",
      aboutUs: "关于我们",
      productsAndServices: "产品与服务",
      contactUs: "联系我们",
      mediaRoom: "媒体中心",
      appendix: "附录",
    },
    home: {
      hero: {
        slides: [
          {
            title: "农业贸易解决方案",
            description: "通过创新的贸易解决方案将生产商与全球市场连接起来。",
            buttonText: "我们的服务",
          },
          {
            title: "可持续实践",
            description: "在亚太地区推广环保负责的农业贸易。",
            buttonText: "了解更多",
          },
          {
            title: "全球网络",
            description: "我们广泛的网络将农业生产商与全球市场连接起来。",
            buttonText: "我们的产品",
          },
          {
            title: "质量保证",
            description: "确保农产品和服务的最高标准。",
            buttonText: "我们的承诺",
          },
        ],
      },
      features: {
        title: "为何选择太平洋科农有限公司",
        subtitle: "我们提供全面的农业贸易解决方案，专注于可持续性和创新。",
        items: [
          {
            title: "可持续实践",
            description: "我们优先考虑环保负责的农业贸易解决方案。",
          },
          {
            title: "全球网络",
            description: "我们广泛的网络将农业生产商与全球市场连接起来。",
          },
          {
            title: "市场专业知识",
            description: "深厚的行业知识，助您驾驭复杂的农业市场。",
          },
          {
            title: "质量保证",
            description: "严格的标准确保最高质量的农产品。",
          },
        ],
      },
      productsPreview: {
        title: "我们的产品与服务",
        subtitle: "探索我们全面的农业贸易解决方案。",
        viewAll: "查看所有产品与服务",
        items: [
          {
            title: "通用产品",
            description: "各种高质量的通用农药产品，满足各种农业需求。",
          },
          {
            title: "注册服务",
            description: "在各个市场注册农产品的专业协助。",
          },
          {
            title: "可持续产品",
            description: "环保负责的农业解决方案，创造更绿色的未来。",
          },
          {
            title: "供应链解决方案",
            description: "优化农业供应链，提高效率和可持续性。",
          },
          {
            title: "专业产品",
            description: "通过本地经销商网络注册和销售的独特产品。",
          },
          {
            title: "肥料原料",
            description: "高质量的肥料生产原料。",
          },
        ],
      },
    },
    about: {
      hero: {
        title: "关于我们",
        subtitle: '"关怀与分享" - 这是我们最擅长的',
      },
      company: {
        title: "我们的公司",
        content: [
          "太平洋科农有限公司（香港）致力于为农民和农业化学品供应链提供具成本效益的通用农药和创新的特种农业化学品。我们在新加坡和澳洲设有联营公司，我们紧密的全球合作网络覆盖全球超过50个城市。",
          "我们精通于销售通用农药、肥料原料、特种农业化学品和工业特种化学品。我们的团队还为一系列专有农业化化学品开发市场，并寻找这些产品的全国分销商。",
        ],
      },
      journey: {
        title: "我们的历程",
        subtitle: "太平洋科农有限公司成长和扩展的关键时刻",
        milestones: [
          {
            year: 1998,
            event: "太平洋科农有限公司私人有限公司在新加坡成立",
          },
          {
            year: 2001,
            event: "太平洋科农有限公司有限公司在澳洲成立",
          },
          {
            year: 2019,
            event: "太平洋科农有限公司成立，负责公司的贸易业务",
          },
        ],
      },
      sourcing: {
        title: "我们的采购卓越",
        subtitle: "将采购挑战转化为客户的机会。",
        content: [
          "在太平洋科农有限公司，我们专注于采购和供应通用农药、特种农业化学品和高性能化化学品。我们的全面方法包括：",
        ],
        list: [
          "监控产品可用性和市场趋势",
          "进行彻底的工厂审核以确保质量控制",
          "获取产品注册所需的必要数据",
          "进行出货前产品分析以确保质量",
          "提供信用条款和产品保证",
        ],
        conclusion: [
          "我们的主要目标是通过精细的采购流程防止不合规格的产品。在罕见的质量问题情况下，我们承诺赔偿或更换，让我们的客户能够专注于他们的核心业务：市场营销和分销。",
          "我们85%的销售额来自客户推荐，我们的声誉不言而喻。让我们为您的业务增添价值，并及时高效地解决您的产品采购需求。",
        ],
      },
      network: {
        title: "全球网络关系图",
        subtitle: "我们广泛的网络跨越各大洲，使我们能够为全球客户提供服务。",
      },
      values: {
        title: "我们的价值观",
        subtitle: "这些核心原则指导我们的业务运营和关系。",
        items: [
          {
            title: "关怀",
            description: "我们优先考虑客户和农业社区的需求。",
          },
          {
            title: "分享",
            description: "我们相信分享知识和资源以促进共同成长。",
          },
          {
            title: "卓越",
            description: "我们在服务提供的各个方面都力求卓越。",
          },
          {
            title: "创新",
            description: "我们不断寻求创新解决方案，以满足不断变化的市场需求。",
          },
        ],
      },
    },
    products: {
      hero: {
        title: "产品与服务",
        subtitle: "量身定制的全面农业贸易解决方案。",
      },
      overview: {
        title: "我们的全面解决方案",
        subtitle: "太平洋科农有限公司提供广泛的产品和服务，旨在满足农业企业的多样化需求。",
      },
      products: {
        title: "我们的产品",
        subtitle: "我们提供各种农业化学产品，利用我们的全球网络和多年经验，为您带来最新和最优质的产品。",
        items: [
          {
            title: "通用产品",
            description: "各种高质量的通用农药产品，满足各种农业需求。",
          },
          {
            title: "专业产品",
            description: "通过本地经销商网络注册和销售的独特产品。",
          },
          {
            title: "高性能化学品",
            description: "用于最佳农业表现的先进化学解决方案。",
          },
          {
            title: "动物健康原料",
            description: "用于兽医行业的药物原料。",
          },
          {
            title: "肥料原料",
            description: "高质量的肥料生产原料。",
          },
          {
            title: "可持续产品",
            description: "环保负责的农业解决方案，创造更绿色的未来。",
          },
        ],
      },
      services: {
        title: "我们的服务",
        subtitle: "我们提供全面的服务，支持整个供应链的农业企业。",
        items: [
          {
            title: "注册服务",
            description: "在各个市场注册农产品的专业协助。",
          },
          {
            title: "市场情报",
            description: "关于农业市场趋势和机会的见解和分析。",
          },
          {
            title: "供应链管理",
            description: "农产品的端到端供应链解决方案。",
          },
        ],
      },
      cta: {
        title: "准备好讨论您的具体需求？",
        subtitle: "我们的团队在此帮助您找到合适的解决方案。",
        button: "联系我们",
      },
    },
    contact: {
      hero: {
        title: "联系我们",
        subtitle: "与我们的团队联系，讨论我们如何支持您的农业业务。",
      },
      getInTouch: {
        title: "与我们联系",
        subtitle: "我们的团队准备回答您的问题，并讨论我们的产品和服务如何满足您的需求。",
        address: {
          label: "地址",
        },
        phone: {
          label: "电话",
        },
        hours: {
          label: "办公时间",
          value: "上午9:00至晚上7:00（GMT +8:00）",
        },
      },
      team: {
        title: "我们的团队",
        members: [
          {
            name: "杨小姐，经理",
            details: [
              "电话（香港）：(+852) 9322 1317",
              "电话（中国）：(+86) 176 7534 0802",
              "电子邮件：candy@pacificagriscience.com / pahk@biznetvigator.com",
            ],
          },
          {
            name: "潘先生，行政和物流",
            details: ["电话（香港）：(+852) 6303 3499", "电子邮件：pahksp@biznetvigator.com"],
          },
        ],
      },
      connect: {
        title: "与我们连接",
        whatsapp: "WhatsApp",
        wechat: "微信",
        wechatId: "微信ID：",
      },
      form: {
        title: "发送消息给我们",
        name: "姓名",
        email: "电子邮件",
        phone: "电话",
        company: "公司",
        subject: "主题",
        message: "消息",
        submit: "发送消息",
        success: "感谢您的消息。我们将尽快回复您！",
        error: "抱歉，发送消息时出现错误。请重试或直接联系我们。",
        sending: "发送中...",
      },
    },
    footer: {
      description: "太平洋科农有限公司在全球提供创新的农业化学解决方案。",
      contact: "联系",
      quickLinks: "快速链接",
      copyright: "© {year} 太平洋科农有限公司。版权所有。",
    },
    common: {
      learnMore: "了解更多",
      contactUs: "联系我们",
      readyToDiscuss: "准备好讨论您的具体需求？",
      ourTeamHelp: "我们的团队在此帮助您找到合适的解决方案。",
      pageUnderConstruction: "此页面正在建设中。我们正在努力为您提供详细信息。请稍后再查看或联系我们以获取更多信息。",
      interestedInOurProducts: "对我们的高性能化学解决方案感兴趣吗？",
      getInTouch: "联系我们",
      comingSoon: "即将推出",
      stayTuned: "敬请期待！",
      visitWebsite: "访问网站",
      downloadPDF: "下载PDF",
    },
    mediaRoom: {
      subtitle: "了解太平洋科农有限公司的最新新闻、活动和见解。",
      comingSoonMessage:
        "我们正在努力为您带来最新的新闻、资源和即将举行的活动。请稍后再来查看太平洋科农有限公司的活动和行业洞察更新。",
    },
    appendix: {
      subtitle: "额外资源、参考资料和补充信息。",
      documentsAndResources: "文件和资源",
      documentsDescription: "获取与我们的运营和行业相关的重要文件和资源。",
      documents: [],
    },
  },
}

export function useTranslations() {
  const { language } = useLanguage()

  return {
    t: (key: string): any => {
      const keys = key.split(".")
      let value: any = translations[language]

      for (const k of keys) {
        if (value[k] === undefined) return key
        value = value[k]
      }

      return value
    },
  }
}
