import styles from "@/styles/all.module.css";
import PdfToExcel from "@/components/PdfToExcel";
import Image from "next/image";
import feature from "@/assets/images/feature.png";
import free2 from "@/assets/images/free2.svg";
import batch from "@/assets/images/batch.svg";
import ocr from "@/assets/images/ocr.svg";
import data from "@/assets/images/data.svg";
import mlanguage from "@/assets/images/mlanguage.svg";
import drag from "@/assets/images/drag.svg";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const t = await getTranslations("pdfToExcelConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/pdftoexcel";
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
        "x-default": `${baseURL}/pdftoexcel`,
        en: `${baseURL}/pdftoexcel`,
        de: `${baseURL}/de/pdftoexcel`,
        es: `${baseURL}/es/pdftoexcel`,
        fr: `${baseURL}/fr/pdftoexcel`,
        it: `${baseURL}/it/pdftoexcel`,
        ja: `${baseURL}/ja/pdftoexcel`,
        ko: `${baseURL}/ko/pdftoexcel`,
        pl: `${baseURL}/pl/pdftoexcel`,
        pt: `${baseURL}/pt/pdftoexcel`,
        ru: `${baseURL}/ru/pdftoexcel`,
        zh: `${baseURL}/zh/pdftoexcel`,
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

const Pdftoexcel = async () => {
  const t = await getTranslations("pdfToExcelConverter");
  return (
    <>
      <div className={styles.pdfformcontainer}>
        <div className={styles.pdfheading}>
          <h1 className={styles.heading1}> {t("title")}</h1>
          <br />
          <h4 className={styles.heading4}>{t("description")}</h4>
        </div>
        <PdfToExcel />
      </div>

      <div className={styles.textContent}>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading1}>{t("onlineConvert.heading")}</h2>
          <p className={styles.textcontentpara}>{t("onlineConvert.content")}</p>
          <p className={styles.textcontentpara}>
            {t("onlineConvert.contentone")}
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/de/pdftoexcel">German</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/es/pdftoexcel">
                Spanish
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/fr/pdftoexcel">French</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/it/pdftoexcel">
                Italian
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ja/pdftoexcel">
                Japanese
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ko/pdftoexcel">Korean</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pl/pdftoexcel">Polish</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pt/pdftoexcel">
                Portuguese
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ru/pdftoexcel">
                Russian
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/zh/pdftoexcel">
                Chinese
              </Link>
            </span>
            ,{t("onlineConvert.contenttwo")}
          </p>
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
            <Link href="https://www.imageocr.info">Image To Text</Link>
          </div>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info/imagetopdf">
              Image To PDF
            </Link>
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
          <h2 className={styles.textheading1}>{t("keyFeatures.heading")} </h2>
          <div className={styles.textcontentdiv}>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleF")}{" "}
            </h3>
            <Image alt="Free access" className={styles.img} src={free2} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionF")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleB")}
            </h3>
            <Image alt="Batch Conversion" className={styles.img} src={batch} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionB")}{" "}
            </p>

            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleE")}
            </h3>
            <Image
              alt="Enhanced Functionality with OCR"
              className={styles.img}
              src={ocr}
            />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptiononeE")}
              <br />
              {t("keyFeatures.features.descriptiontwoE")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleA")}
            </h3>
            <Image
              alt="Accurate Data Preservation"
              className={styles.img}
              src={data}
            />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionA")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleM")}
            </h3>
            <Image
              alt="Multi-Language Support"
              className={styles.img}
              src={mlanguage}
            />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionM")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleD")}
            </h3>
            <Image
              alt="Drag and Drop Functionality"
              className={styles.img}
              src={drag}
            />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionD")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pdftoexcel;
