import styles from "@/app/[locale]/termsncondition/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("termsandcondition");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/termsncondition";
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
        "x-default": `${baseURL}/en/termsncondition`,
        en: `${baseURL}/en/termsncondition`,
        de: `${baseURL}/de/termsncondition`,
        es: `${baseURL}/es/termsncondition`,
        fr: `${baseURL}/fr/termsncondition`,
        it: `${baseURL}/it/termsncondition`,
        ja: `${baseURL}/ja/termsncondition`,
        ko: `${baseURL}/ko/termsncondition`,
        pl: `${baseURL}/pl/termsncondition`,
        pt: `${baseURL}/pt/termsncondition`,
        ru: `${baseURL}/ru/termsncondition`,
        zh: `${baseURL}/zh/termsncondition`,
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
