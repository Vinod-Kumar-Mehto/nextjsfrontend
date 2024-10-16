import styles from "@/styles/all.module.css";
import WordToPdf from "@/components/WordToPdf";
import feature from "@/assets/images/feature.png";
import multipledoc from "@/assets/images/multipledoc.svg";
import speed from "@/assets/images/speed.svg";
import goodinterface from "@/assets/images/interface.svg";
import security from "@/assets/images/security.svg";

import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const t = await getTranslations("wordToPdfConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/wordtopdf"; // Adjust this if you have dynamic paths
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
      t("keyWords.sevenk"),
      t("keyWords.eightk"),
      t("keyWords.ninek"),
      t("keyWords.tenk"),
      t("keyWords.elevenk"),
      t("keyWords.twelevek"),
      t("keyWords.thirteenk"),
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
        "x-default": `${baseURL}/wordtopdf`,
        en: `${baseURL}/wordtopdf`,
        de: `${baseURL}/de/wordtopdf`,
        es: `${baseURL}/es/wordtopdf`,
        fr: `${baseURL}/fr/wordtopdf`,
        it: `${baseURL}/it/wordtopdf`,
        ja: `${baseURL}/ja/wordtopdf`,
        ko: `${baseURL}/ko/wordtopdf`,
        pl: `${baseURL}/pl/wordtopdf`,
        pt: `${baseURL}/pt/wordtopdf`,
        ru: `${baseURL}/ru/wordtopdf`,
        zh: `${baseURL}/zh/wordtopdf`,
      },
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: canonicalURL, // Canonical URL
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
          <br />
          <p className={styles.textcontentpara}>
            {t("onlineConvert.contentone")}
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/de/wordtopdf">German</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/es/wordtopdf">Spanish</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/fr/wordtopdf">French</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/it/wordtopdf">Italian</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ja/wordtopdf">
                Japanese
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ko/wordtopdf">Korean</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pl/wordtopdf">Polish</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pt/wordtopdf">
                Portuguese
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ru/wordtopdf">Russian</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/zh/wordtopdf">Chinese</Link>
            </span>
            {t("onlineConvert.contenttwo")}
          </p>
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
        <h2 className={styles.textheading1}>{t("keyFeatures.headinghref")} </h2>
        <div className={styles.hrefcontainer}>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info/pdftoimage">
              PDF To Image
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
            <Link href="https://www.imageocr.info/imagetopdf">
              Image To PDF
            </Link>
          </div>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info">Image To Text</Link>
          </div>
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
            <Image
              alt="user-friendly"
              className={styles.img}
              src={goodinterface}
            />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionU")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS")}
            </h3>
            <Image
              alt="multiple-docx"
              className={styles.img}
              src={multipledoc}
            />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS")}
            </p>

            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleM")}
            </h3>
            <Image alt="secure" className={styles.img} src={security} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionM")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleF")}
            </h3>
            <Image alt="fast and reliable" className={styles.img} src={speed} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionF")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordtopdf;
