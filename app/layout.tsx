import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "@/app/providers"
import { seoKeywords, siteConfig } from "@/core/config/site"
import { poppins } from "./font"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}opengraph-image`],
    creator: "@Kolynz_b",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}opengraph-image`,
      },
    ],
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}rss.xml`,
    },
  },
  creator: "Atuhaire Collins Benda",
  publisher: "Atuhaire Collins Benda",
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: "Atuhaire Collins Benda", url: "https://collinsbenda.com" }],
  applicationName: siteConfig.name,
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
