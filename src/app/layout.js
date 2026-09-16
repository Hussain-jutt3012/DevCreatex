import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Providers from "@/providers/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const baseUrl = "https://devcreatex.com";

export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "DevCreatex | Web Development, AI Automation & Digital Solutions",
    template: "%s | DevCreatex",
  },

  description:
    "DevCreatex is a leading agency delivering custom web development, SaaS applications, AI automation, mobile apps, cloud solutions, and SEO services for modern businesses.",

  applicationName: "DevCreatex",

  authors: [{ name: "DevCreatex", url: baseUrl }],
  creator: "DevCreatex",
  publisher: "DevCreatex",

  keywords: [
    "DevCreatex",
    "Dev Createx",
    "web development company",
    "custom web development agency",
    "SaaS development services",
    "React next.js developer",
    "AI automation solutions",
    "AI development company",
    "mobile app development",
    "cloud solutions DevOps",
    "SEO services agency",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "DevCreatex",
    title: "DevCreatex | Web Development, AI & Digital Solutions",
    description:
      "Custom web development, SaaS, AI automation, mobile applications, cloud solutions, and modern digital services.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCreatex Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DevCreatex | Web Development, AI & Digital Solutions",
    description:
      "Custom web development, AI automation, SaaS, mobile apps, cloud solutions, and SEO services.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon/BLUB.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    shortcut: "/icon/BLUB.png",
    apple: "/icon/BLUB.png",
  },
};

export default function RootLayout({ children }) {
  // Schema markup for Google ranking
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevCreatex",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    sameAs: [],
    description:
      "DevCreatex delivers custom web development, SaaS applications, AI automation, mobile apps, and SEO services.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}