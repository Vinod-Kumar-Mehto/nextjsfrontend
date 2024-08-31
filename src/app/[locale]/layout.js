import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const t = await getTranslations("imgtotext");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: [
      "imageocr",
      "image to text",
      "image to text converter",
      "picture to text",
      "convert image to text",
      "ocr",
      "free ocr",
      "ocr software",
      "optical character recognition",
      "pdf ocr",
      "pdf to word converter",
      "convert pdf to word",
      "pdf to excel",
      "convert pdf to image",
      "image to pdf",
      "convert word to pdf",
      "jpeg to pdf",
      "jpg to pdf",
      "docx to pdf",
      "pdf to jpg",
      "doc to pdf",
      "pdf to image converter",
      "pdf to docx converter",
    ],
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      URL: "https://www.imageocr.info",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
