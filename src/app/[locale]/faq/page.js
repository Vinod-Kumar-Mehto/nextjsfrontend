import styles from "@/app/[locale]/faq/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("faq");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/faq";
  const canonicalURL = `${baseURL}/${lang}${pagePath}`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    alternates: {
      canonical: canonicalURL,
      languages: {
        "x-default": `${baseURL}/faq`,
        en: `${baseURL}/faq`,
        de: `${baseURL}/de/faq`,
        es: `${baseURL}/es/faq`,
        fr: `${baseURL}/fr/faq`,
        it: `${baseURL}/it/faq`,
        ja: `${baseURL}/ja/faq`,
        ko: `${baseURL}/ko/faq`,
        pl: `${baseURL}/pl/faq`,
        pt: `${baseURL}/pt/faq`,
        ru: `${baseURL}/ru/faq`,
        zh: `${baseURL}/zh/faq`,
      },
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: canonicalURL,
      siteName: t("metadata.title"),
      images: [
        {
          url: "https://www.imageocr.info/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Open Graph Image",
        },
      ],
    },
  };
}

const FaqPage = async () => {
  const t = await getTranslations("faq");
  return (
    <>
      <div className={styles.faqcontainer}>
        {/* PDF to Image FAQs */}
        <h1 className={styles.heading1}>{t("title")}</h1>
        <div className={styles.faqsection}>
          <h2 className={styles.heading2}>{t("sections.pdfToImage.title")}</h2>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToImage.items.questionone")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToImage.items.answerone")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToImage.items.questiontwo")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToImage.items.answertwo")}
            </p>
          </div>

          {/* Add more FAQ items for PDF to Image as needed */}
        </div>

        {/* PDF to Word FAQs */}
        <div className={styles.faqsection}>
          <h2 className={styles.heading2}>{t("sections.pdfToWord.title")}</h2>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToWord.items.questionone")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToWord.items.answerone")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToWord.items.questiontwo")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToWord.items.answertwo")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToWord.items.questionthree")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToWord.items.answerthree")}
            </p>
          </div>
          {/* Add more FAQ items for PDF to Word as needed */}
        </div>

        {/* Image to Text FAQs */}
        <div className={styles.faqsection}>
          <h2 className={styles.heading2}>{t("sections.imageToText.title")}</h2>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.imageToText.items.questionone")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.imageToText.items.answerone")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.imageToText.items.questiontwo")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.imageToText.items.answertwo")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.imageToText.items.questionthree")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.imageToText.items.answerthree")}
            </p>
          </div>
          {/* Add more FAQ items for Image to Text as needed */}
        </div>

        {/* PDF to Excel FAQs */}
        <div className={styles.faqsection}>
          <h2 className={styles.heading2}>{t("sections.pdfToExcel.title")}</h2>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToExcel.items.questionone")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToExcel.items.answerone")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToExcel.items.questiontwo")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToExcel.items.answertwo")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.pdfToExcel.items.questionthree")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.pdfToExcel.items.answerthree")}
            </p>
          </div>
          {/* Add more FAQ items for PDF to Excel as needed */}
        </div>

        {/* Image to PDF FAQs */}
        <div className={styles.faqsection}>
          <h2 className={styles.heading2}>{t("sections.imageToPdf.title")}</h2>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.imageToPdf.items.questionone")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.imageToPdf.items.answerone")}
            </p>
          </div>

          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.imageToPdf.items.questiontwo")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.imageToPdf.items.answertwo")}
            </p>
          </div>
          {/* Add more FAQ items for Image to PDF as needed */}
        </div>

        {/* Word to PDF FAQs */}
        <div className={styles.faqsection}>
          <h2 className={styles.heading2}>{t("sections.wordToPdf.title")}</h2>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.wordToPdf.items.questionone")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.wordToPdf.items.answerone")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.wordToPdf.items.questiontwo")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.wordToPdf.items.answertwo")}
            </p>
          </div>
          <div className={styles.faqitem}>
            <h4 className={styles.heading4}>
              {t("sections.wordToPdf.items.questionthree")}
            </h4>
            <p className={styles.paragraph}>
              {t("sections.wordToPdf.items.answerthree")}
            </p>
          </div>
          {/* Add more FAQ items for Word to PDF as needed */}
        </div>
      </div>
    </>
  );
};

export default FaqPage;
