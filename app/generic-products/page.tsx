'use client';


import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

export default function GenericProducts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const genericProducts = [
    "Butroxydim",
    "Alpha-Cypermethrin",
    "Glyphosate",
    "Abamectin",
    "Cyproconazole",
    "Halosulfuron-methyl",
    "Acetamiprid",
    "2,4-D",
    "Hexaconazole",
    "Acetochlor",
    "Daminozide",
    "Hexazinone",
    "Alachlor",
    "Deltamethrin",
    "Hydramethylnon",
    "Aluminium Phosphide",
    "Desmedipham",
    "Hymexazol",
    "Amitraz",
    "Diafenthiuron",
    "Imazalil",
    "Atrazine",
    "Diazinon",
    "Imazapic",
    "Azamethiphos",
    "Dicamba",
    "Imazethapyr",
    "Azoxystrobin",
    "Dichlorprop-P",
    "Imidacloprid",
    "Benomyl",
    "Diclofop-methyl",
    "Ioxynil",
    "Bifenthrin",
    "Difenoconazole",
    "Iprodione",
    "Boscalid",
    "Diflufenican",
    "Kresoxim-methyl",
    "Brassinolide",
    "Diuron",
    "MCPA",
    "Bromoxynil",
    "Emamectin Benzoate",
    "Mecoprop",
    "Butachlor",
    "Epoxiconazole",
    "Mepiquat Chloride",
    "Carbendazim",
    "Ethephon",
    "Metalaxyl-M",
    "Carbofuran",
    "Ethofumesate",
    "Metaldehyde",
    "Carboxin",
    "Fenvalerate",
    "Metconazole",
    "Cartap",
    "Fipronil",
    "Methomyl",
    "Chlormequat Chloride",
    "Florasulam",
    "Metribuzin",
    "Chlorothalonil",
    "Fluazinam",
    "Metsulfuron-methyl",
    "Chlorsulfuron",
    "Fludioxonil",
    "1-Naphthaleneacetic Acid",
    "Clodinafop-Propargyl",
    "Flufenacet",
    "Nicosulfuron",
    "Clopyralid",
    "Flupropanate",
    "Oryzalin",
    "Cyanamide",
    "Fluroxypyr",
    "Oxadiazon",
    "Cycloxydim",
    "Flutolanil",
    "Oxamyl",
    "Cyazofamid",
    "Fosthiazate",
    "Oxyfluorfen",
    "Cyfluthrin",
    "Gibberellic Acid",
    "Paclobutrazol",
    "Lambda-Cyhalothrin",
    "Glufosinate-Ammonium",
    "Paraquat",
    "Cypermethrin",
    "Triphenyltin Hydroxide",
    "Metamitron",
    "Penconazole",
    "Tricyclazole",
    "Permethrin",
    "Triflumizole",
    "Phenmedipham",
    "Trifluralin",
    "Picloram",
    "Triclopyr",
    "Pretilachlor",
    "Indoxacarb",
    "Primisulfuron-methyl",
    "Fluquinconazole",
    "Propamocarb Hydrochloride",
    "Potassium Bicarbonate",
    "Propaquizafop",
    "Streptomycin",
    "Propargite",
    "Propiconazole",
    "Prosulfocarb",
    "Pyrazosulfuron-ethyl",
    "Pyrifenox",
    "Quinalphos",
    "Quinclorac",
    "Rimsulfuron",
    "Simazine",
    "Sulfosulfuron",
    "Sulfuryl Fluoride",
    "Tebuconazole",
    "Tebuthiuron",
    "Teflubenzuron",
    "Temephos",
    "Tetraconazole",
    "Thiamethoxam",
    "Thidiazuron",
    "Triadimefon",
    "Triallate",
    "Triasulfuron",
    "Tribenuron-methyl",
  ]

  return (
    <div className="bg-page">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt="Generic Products"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Generic Products</h1>
          <p className="mt-6 max-w-xl text-xl">
            A wide range of high-quality generic pesticide products for various agricultural needs.
          </p>
        </div>
      </div>

      {/* Product List */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300">Our Generic Products</h2>
        <p className="mt-4 text-lg text-page">
          We offer a comprehensive list of generic pesticide products. Below is our current selection of available
          products:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {genericProducts.map((product, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-900 dark:text-gray-100">{product}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/List of Generic Pesticide Products (2024).pdf"
            download="List of Generic Pesticide Products (2024).pdf"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
          >
            Download Full Product List <Download className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* GLP Report Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300">
          Good Laboratory Practice (GLP) Report
        </h2>
        <p className="mt-4 text-lg text-page">
          Good laboratory practice (GLP) is a set of principles intended to assure the quality and integrity of
          non-clinical laboratory studies that are intended to support research or marketing permits for products
          regulated by government agencies. Download our GLP report below to learn more about our generic products.
        </p>
        <div className="mt-8">
          <a
            href="/List of GLP Report - Updated on Jan 5, 2025.pdf"
            download="List of GLP Report - Updated on Jan 5, 2025.pdf"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
          >
            Download GLP Report <Download className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need more information about our generic products?
              <span className="block text-xl font-medium mt-2">
                Our team is ready to assist you with any questions.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-700 hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

