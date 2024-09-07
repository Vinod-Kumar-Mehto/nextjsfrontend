import styles from "@/styles/all.module.css";
import PdfToWord from "@/components/PdfToWord";
import feature from "@/assets/images/feature.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("pdfToWordConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/pdftoword";
  const canonicalURL = `${baseURL}/${lang}${pagePath}`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: [
      t("keyWords.onek"),
      t("keyWords.twok"),
      t("keyWords.threek"),
      t("keyWords.fourk"),
      t("keyWords.fivek"),
      t("keyWords.sixk"),
    ],
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
        "x-default": `${baseURL}/en/pdftoword`,
        en: `${baseURL}/en/pdftoword`,
        de: `${baseURL}/de/pdftoword`,
        es: `${baseURL}/es/pdftoword`,
        fr: `${baseURL}/fr/pdftoword`,
        it: `${baseURL}/it/pdftoword`,
        ja: `${baseURL}/ja/pdftoword`,
        ko: `${baseURL}/ko/pdftoword`,
        pl: `${baseURL}/pl/pdftoword`,
        pt: `${baseURL}/pt/pdftoword`,
        ru: `${baseURL}/ru/pdftoword`,
        zh: `${baseURL}/zh/pdftoword`,
      },
    },

    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: canonicalURL,
      siteName: "ImageOCR",
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

const PdfToword = async () => {
  const t = await getTranslations("pdfToWordConverter");
  return (
    <>
      <div className={styles.pdfformcontainer}>
        <div className={styles.pdfheading}>
          <h1 className={styles.heading1}>{t("title")}</h1>
          <br />
          <h4 className={styles.heading4}>{t("description")}</h4>
        </div>
        <PdfToWord />
      </div>

      <div className={styles.textContent}>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading1}>{t("onlineConvert.heading")}</h2>

          <p className={styles.textcontentpara}>{t("onlineConvert.content")}</p>
        </div>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading1}>{t("howToConvert.heading")}</h2>
          <br />
          <ul className={styles.textcontentul}>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentparali}>
                {t("howToConvert.steps.stepone")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentparali}>
                {t("howToConvert.steps.steptwo")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentparali}>
                {t("howToConvert.steps.stepthree")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentparali}>
                {t("howToConvert.steps.stepfour")}
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.textcontentdiv}>
          <Image
            src={feature}
            className={styles.featureimg}
            alt="featureimage"
          />
          <h2 className={styles.textheading1}>{t("keyFeatures.heading")} </h2>
          <div>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleF")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionF")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS1")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS1")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS2")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS2")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS3")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS3")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleO")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionO")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfToword;
