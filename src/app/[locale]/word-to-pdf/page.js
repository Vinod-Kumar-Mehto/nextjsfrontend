import styles from "@/styles/all.module.css";
import WordToPdf from "@/components/WordToPdf";
import feature from "@/assets/images/feature.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("wordToPdfConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/word-to-pdf"; // Adjust this if you have dynamic paths
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
        "x-default": `${baseURL}/en/word-to-pdf`,
        en: `${baseURL}/en/word-to-pdf`,
        de: `${baseURL}/de/word-to-pdf`,
        es: `${baseURL}/es/word-to-pdf`,
        fr: `${baseURL}/fr/word-to-pdf`,
        it: `${baseURL}/it/word-to-pdf`,
        ja: `${baseURL}/ja/word-to-pdf`,
        ko: `${baseURL}/ko/word-to-pdf`,
        pl: `${baseURL}/pl/word-to-pdf`,
        pt: `${baseURL}/pt/word-to-pdf`,
        ru: `${baseURL}/ru/word-to-pdf`,
        zh: `${baseURL}/zh/word-to-pdf`,
      },
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: canonicalURL, // Canonical URL
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

const Wordtopdf = async () => {
  const t = await getTranslations("wordToPdfConverter");
  return (
    <>
      <div className={styles.pdfformcontainer}>
        <div className={styles.pdfheading}>
          <h1 className={styles.heading1}>{t("title")}</h1>
          <br />
          <h4 className={styles.heading4}>{t("description")}</h4>
        </div>
        <WordToPdf />
      </div>
      <div className={styles.textContent}>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading1}>{t("onlineConvert.heading")}</h2>
          <p className={styles.textcontentpara}>{t("onlineConvert.content")}</p>
        </div>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading1}>{t("howToConvert.heading")} </h2>
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
              {t("keyFeatures.features.titleU")}{" "}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionU")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS")}
            </p>

            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleM")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionM")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordtopdf;
