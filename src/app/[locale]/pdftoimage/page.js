import styles from "@/styles/all.module.css";
import PdfToImage from "@/components/PdfToImage";
import Image from "next/image";
import feature from "@/assets/images/feature.png";
import freeprice from "@/assets/images/freeprice.svg";
import multiplefiles from "@/assets/images/files.svg";
import multiplepages from "@/assets/images/multiplepages.svg";
import security from "@/assets/images/security.svg";
import quality from "@/assets/images/quality.svg";
import fast from "@/assets/images/fast.svg";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const t = await getTranslations("pdfToImageConverter");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/pdftoimage";
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
        "x-default": `${baseURL}/pdftoimage`,
        en: `${baseURL}/pdftoimage`,
        de: `${baseURL}/de/pdftoimage`,
        es: `${baseURL}/es/pdftoimage`,
        fr: `${baseURL}/fr/pdftoimage`,
        it: `${baseURL}/it/pdftoimage`,
        ja: `${baseURL}/ja/pdftoimage`,
        ko: `${baseURL}/ko/pdftoimage`,
        pl: `${baseURL}/pl/pdftoimage`,
        pt: `${baseURL}/pt/pdftoimage`,
        ru: `${baseURL}/ru/pdftoimage`,
        zh: `${baseURL}/zh/pdftoimage`,
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
          <p className={styles.textcontentpara}>
            {t("onlineConvert.contentone")}
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/de/pdftoimage">German</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/es/pdftoimage">
                Spanish
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/fr/pdftoimage">French</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/it/pdftoimage">
                Italian
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ja/pdftoimage">
                Japanese
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ko/pdftoimage">Korean</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pl/pdftoimage">Polish</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pt/pdftoimage">
                Portuguese
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ru/pdftoimage">
                Russian
              </Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/zh/pdftoimage">
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
        <h2 className={styles.textheading1}>{t("keyFeatures.headinghref")}</h2>
        <div className={styles.hrefcontainer}>
          <div className={styles.box}>
            <Link href="https://www.imageocr.info">Image To Text</Link>
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
            <Link href="https://www.imageocr.info/wordtopdf">Word To PDF</Link>
          </div>
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
            <Image alt="free" className={styles.img} src={freeprice} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionF")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS1")}
            </h3>
            <Image alt="multiple" className={styles.img} src={multiplefiles} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS1")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS2")}
            </h3>
            <Image alt="pages" className={styles.img} src={multiplepages} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS2")}
            </p>

            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS3")}
            </h3>
            <Image alt="secure" className={styles.img} src={security} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS3")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS4")}
            </h3>
            <Image alt="high quality" className={styles.img} src={quality} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS4")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleS5")}
            </h3>
            <Image alt="reliable" className={styles.img} src={fast} />
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionS5")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfToimage;
