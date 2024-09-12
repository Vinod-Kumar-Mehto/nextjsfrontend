import styles from "@/styles/all.module.css";
import PdfToImage from "@/components/PdfToImage";
import Image from "next/image";
import feature from "@/assets/images/feature.png";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("pdfToImageConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/pdf-to-image";
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
        "x-default": `${baseURL}/en/pdf-to-image`,
        en: `${baseURL}/en/pdf-to-image`,
        de: `${baseURL}/de/pdf-to-image`,
        es: `${baseURL}/es/pdf-to-image`,
        fr: `${baseURL}/fr/pdf-to-image`,
        it: `${baseURL}/it/pdf-to-image`,
        ja: `${baseURL}/ja/pdf-to-image`,
        ko: `${baseURL}/ko/pdf-to-image`,
        pl: `${baseURL}/pl/pdf-to-image`,
        pt: `${baseURL}/pt/pdf-to-image`,
        ru: `${baseURL}/ru/pdf-to-image`,
        zh: `${baseURL}/zh/pdf-to-image`,
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

const PdfToimage = async () => {
  const t = await getTranslations("pdfToImageConverter");
  return (
    <>
      <div className={styles.pdfformcontainer}>
        <div className={styles.pdfheading}>
          <h1 className={styles.heading1}> {t("title")}</h1>
          <br />
          <h4 className={styles.heading4}>{t("description")}</h4>
        </div>
        <PdfToImage />
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

          <h2 className={styles.textheading1}>{t("keyFeatures.heading")}</h2>
          <div className={styles.textcontentdiv}>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleF")}{" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfToimage;
