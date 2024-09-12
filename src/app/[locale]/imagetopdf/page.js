import styles from "@/styles/all.module.css";
import ImageToPdf from "@/components/ImageToPdf";
import Image from "next/image";
import feature from "@/assets/images/feature.png";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const t = await getTranslations("imageToPdfConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/imagetopdf";
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
        "x-default": `${baseURL}/en/imagetopdf`,
        en: `${baseURL}/en/imagetopdf`,
        de: `${baseURL}/de/imagetopdf`,
        es: `${baseURL}/es/imagetopdf`,
        fr: `${baseURL}/fr/imagetopdf`,
        it: `${baseURL}/it/imagetopdf`,
        ja: `${baseURL}/ja/imagetopdf`,
        ko: `${baseURL}/ko/imagetopdf`,
        pl: `${baseURL}/pl/imagetopdf`,
        pt: `${baseURL}/pt/imagetopdf`,
        ru: `${baseURL}/ru/imagetopdf`,
        zh: `${baseURL}/zh/imagetopdf`,
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

const Imagetopdf = async () => {
  const t = await getTranslations("imageToPdfConverter");

  return (
    <>
      <div className={styles.pdfformcontainer}>
        <div className={styles.pdfheading}>
          <h1 className={styles.heading1}>{t("title")}</h1>
          <br />
          <h4 className={styles.heading4}>{t("description")}</h4>
        </div>
        <ImageToPdf />
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
        <h2 className={styles.textheading1}>{t("mainBenefits.headinghref")}</h2>
        <div className={styles.hrefcontainer}>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info/pdftoimage">
              PDF TO Image
            </Link>
          </div>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info/pdftoword">PDF To Word</Link>
          </div>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info/pdftoexcel">
              PDF To Excel
            </Link>
          </div>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info">Image To Text</Link>
          </div>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info/wordtopdf">Word To PDF</Link>
          </div>
        </div>

        <div className={styles.textcontentdiv}>
          <Image
            src={feature}
            className={styles.featureimg}
            alt="featureimage"
          />
          <h2 className={styles.textheading1}>{t("mainBenefits.heading")}</h2>
          <div className={styles.textcontentdiv}>
            <h3 className={styles.textheading3}>
              {t("mainBenefits.benefits.titleM")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("mainBenefits.benefits.descriptionM")}
            </p>
            <h3 className={styles.textheading3}>
              {t("mainBenefits.benefits.titleU")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("mainBenefits.benefits.descriptionU")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagetopdf;
