import styles from "@/app/[locale]/contactus/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("contactus");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/contactus";
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
        "x-default": `${baseURL}/contactus`,
        en: `${baseURL}/contactus`,
        de: `${baseURL}/de/contactus`,
        es: `${baseURL}/es/contactus`,
        fr: `${baseURL}/fr/contactus`,
        it: `${baseURL}/it/contactus`,
        ja: `${baseURL}/ja/contactus`,
        ko: `${baseURL}/ko/contactus`,
        pl: `${baseURL}/pl/contactus`,
        pt: `${baseURL}/pt/contactus`,
        ru: `${baseURL}/ru/contactus`,
        zh: `${baseURL}/zh/contactus`,
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

const ContactUS = async () => {
  const t = await getTranslations("contactus");
  return (
    <>
      <div className={styles.contactuscontainer}>
        <h1 className={styles.contactheading1}>{t("title")}</h1>
        <div className={styles.contactussection}>
          <p className={styles.contactparagraph}>
            {t("description")}
            <br />
            <br />
          </p>
          <a
            href="mailto:imageocrcontact@gmail.com"
            className={styles.contactemail}
          >
            Imageocrcontact@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
