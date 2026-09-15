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

export const metadata = {
  metadataBase: new URL("https://www.devcreatex.com"),

  title: {
    default: "DevCreatex | Web Development, AI & Digital Solutions",
    template: "%s | DevCreatex",
  },

  description:
    "DevCreatex delivers custom web development, SaaS applications, AI automation, mobile apps, cloud solutions, SEO, and digital technology services for modern businesses.",

  applicationName: "DevCreatex",

  authors: [
    {
      name: "DevCreatex",
    },
  ],

  creator: "DevCreatex",
  publisher: "DevCreatex",

  keywords: [
    "DevCreatex",
    "web development company",
    "custom web development",
    "SaaS development",
    "React development",
    "Next.js development",
    "Node.js development",
    "AI automation",
    "AI development",
    "machine learning",
    "mobile app development",
    "cloud solutions",
    "DevOps services",
    "SEO services",
    "Local SEO",
    "GEO",
    "AIO",
    "digital marketing",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.devcreatex.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.devcreatex.com",
    siteName: "DevCreatex",
    title: "DevCreatex | Web Development, AI & Digital Solutions",
    description:
      "Custom web development, SaaS, AI automation, mobile applications, cloud solutions, SEO, and digital technology services.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCreatex - Digital Solutions Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DevCreatex | Web Development, AI & Digital Solutions",
    description:
      "Custom web development, AI automation, SaaS, mobile apps, cloud solutions, SEO, and digital technology services.",
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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
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