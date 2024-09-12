import styles from "@/app/[locale]/terms-and-condition/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("termsandcondition");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/terms-and-condition";
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
        "x-default": `${baseURL}/en/terms-and-condition`,
        en: `${baseURL}/en/terms-and-condition`,
        de: `${baseURL}/de/terms-and-condition`,
        es: `${baseURL}/es/terms-and-condition`,
        fr: `${baseURL}/fr/terms-and-condition`,
        it: `${baseURL}/it/terms-and-condition`,
        ja: `${baseURL}/ja/terms-and-condition`,
        ko: `${baseURL}/ko/terms-and-condition`,
        pl: `${baseURL}/pl/terms-and-condition`,
        pt: `${baseURL}/pt/terms-and-condition`,
        ru: `${baseURL}/ru/terms-and-condition`,
        zh: `${baseURL}/zh/terms-and-condition`,
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

const TermsnCondition = async () => {
  const t = await getTranslations("termsandcondition");
  return (
    <>
      <div className={styles.termscontainer}>
        <h1 className={styles.heading1}>{t("heading1")}</h1>
        <div className={styles.termssection}>
          <p className={styles.paragraph}>{t("termssection1.paragraph")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection2.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection2.paragraph1")}</p>
          <p className={styles.paragraph}>{t("termssection2.paragraph2")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection3.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection3.paragraph1")}</p>
          <p className={styles.paragraph}>{t("termssection3.paragraph2")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection4.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection4.paragraph1")}</p>
          <p className={styles.paragraph}>{t("termssection4.paragraph2")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection5.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection5.paragraph")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection6.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection6.paragraph1")}</p>
          <ul className={styles.unlistedlist}>
            <li className={styles.listedlist}>
              {t("termssection6.listItem1")}
            </li>
            <li className={styles.listedlist}>
              {t("termssection6.listItem2")}
            </li>
            <li className={styles.listedlist}>
              {t("termssection6.listItem3")}
            </li>
          </ul>
          <p className={styles.paragraph}>{t("termssection6.paragraph2")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection7.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection7.paragraph1")}</p>
          <p className={styles.paragraph}>{t("termssection7.paragraph2")}</p>
        </div>

        <div className={styles.termssection}>
          <h2 className={styles.heading2}>{t("termssection8.heading2")}</h2>
          <p className={styles.paragraph}>{t("termssection8.paragraph")}</p>
        </div>
      </div>
    </>
  );
};

export default TermsnCondition;
