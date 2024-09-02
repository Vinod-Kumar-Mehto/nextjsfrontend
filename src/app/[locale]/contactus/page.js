import styles from "@/app/[locale]/contactus/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("contactus");

  return {
    title: { absolute: t("metadata.title") },
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
      languages: {
        en: "/en/contactus",
        de: "/de/contactus",
        es: "/es/contactus",
        fr: "/fr/contactus",
        it: "/it/contactus",
        ja: "/ja/contactus",
        ko: "/ko/contactus",
        pl: "/pl/contactus",
        pt: "/pt/contactus",
        ru: "/ru/contactus",
        zh: "/zh/contactus",
      },
    },
    openGraph: {
      title: { absolute: t("metadata.title") },
      description: t("metadata.description"),
      URL: "https://www.imageocr.info/contactus",
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
