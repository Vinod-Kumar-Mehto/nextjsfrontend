import styles from "@/styles/page.module.css";
import printedDoc from "@/assets/images/documents.png";
import healthcare from "@/assets/images/healthcare.png";
import education from "@/assets/images/education.png";
import legal from "@/assets/images/legal.png";
import translation from "@/assets/images/translation.png";
import Image from "next/image";
import ImgToText from "@/components/ImgToText";
import feature from "@/assets/images/feature.png";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const t = await getTranslations("imgtotext");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const canonicalURL = `${baseURL}/${lang}`;

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
        "x-default": `${baseURL}`,
        en: `${baseURL}`,
        de: `${baseURL}/de`,
        es: `${baseURL}/es`,
        fr: `${baseURL}/fr`,
        it: `${baseURL}/it`,
        ja: `${baseURL}/ja`,
        ko: `${baseURL}/ko`,
        pl: `${baseURL}/pl`,
        pt: `${baseURL}/pt`,
        ru: `${baseURL}/ru`,
        zh: `${baseURL}/zh`,
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

const ImageToText = async () => {
  const t = await getTranslations("imgtotext");

  return (
    <>
      <div className={styles.formcontainer}>
        <div className={styles.heading}>
          <h1 className={styles.containerheading}>
            {t("imageToTextConverter.title")}
          </h1>
          <br />
          <h4 className={styles.containerheading4}>
            {t("imageToTextConverter.description")}
          </h4>
        </div>
        <ImgToText />
      </div>

      <div className={styles.textContent}>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading}>
            {t("imageToTextConverter.whatIs.heading")}
          </h2>
          <p className={styles.textcontentpara}>
            {t("imageToTextConverter.whatIs.contentone")} <br />
            <br />
            {t("imageToTextConverter.whatIs.contenttwo")}
            <br />
            <br />
            {t("imageToTextConverter.whatIs.contentthree")}
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/de">German</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/es">Spanish</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/fr">French</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/it">Italian</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ja">Japanese</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ko">Korean</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pl">Polish</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/pt">Portuguese</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/ru">Russian</Link>
            </span>
            ,
            <span className={styles.seolink}>
              <Link href="https://www.imageocr.info/zh">Chinese</Link>
            </span>
            ,{t("imageToTextConverter.whatIs.contentfour")}
          </p>
        </div>
        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading}>
            {t("imageToTextConverter.howItWorks.heading")}
          </h2>
          <br />

          <ul className={styles.textcontentul}>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.stepone")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.steptwo")}
              </p>
            </li>
            <li>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.stepthree")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.stepfour")}
              </p>
            </li>
          </ul>
        </div>
        <h2 className={styles.textheading}>
          {t("imageToTextConverter.keyFeatures.headinghref")}
        </h2>
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
            <Link href="https://www.imageocr.info/wordtopdf">Word To PDF</Link>
          </div>
        </div>

        <div className={styles.textcontentdiv}>
          <Image alt="keyfeature" src={feature} className={styles.featureimg} />
          <h2 className={styles.textheading}>
            {t("imageToTextConverter.keyFeatures.heading")}
          </h2>
          <div>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.keyFeatures.features.titleone")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.keyFeatures.features.descriptionone")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.keyFeatures.features.titletwo")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.keyFeatures.features.descriptiontwo")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.keyFeatures.features.titlethree")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.keyFeatures.features.descriptionthree")}
            </p>
          </div>
        </div>

        <div className={styles.textcontentdiv}>
          <h2 className={styles.textheading}>
            {t("imageToTextConverter.benefits.heading")}
          </h2>
          <div>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titledigi")}
            </h3>
            <Image alt="documents" className={styles.img} src={printedDoc} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiondigione")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiondigitwo")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiondigithree")}{" "}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titlehealtwo")}
            </h3>
            <Image alt="healthcare" className={styles.img} src={healthcare} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionheaone")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionheatwo")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titleedthree")}
            </h3>
            <Image alt="education" className={styles.img} src={education} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptioned")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titlelefour")}
            </h3>
            <Image alt="legal" className={styles.img} src={legal} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionleone")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionletwo")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titletrfive")}{" "}
            </h3>
            <Image alt="translation" className={styles.img} src={translation} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiontr")}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageToText;
