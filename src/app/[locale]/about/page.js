import styles from "@/app/[locale]/about/page.module.css";
import conversion from "@/assets/images/conversion.png";
import free from "@/assets/images/free.png";
import multilingual from "@/assets/images/multilingual.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("aboutUs");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/about";
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
        "x-default": `${baseURL}/en/about`,
        en: `${baseURL}/en/about`,
        de: `${baseURL}/de/about`,
        es: `${baseURL}/es/about`,
        fr: `${baseURL}/fr/about`,
        it: `${baseURL}/it/about`,
        ja: `${baseURL}/ja/about`,
        ko: `${baseURL}/ko/about`,
        pl: `${baseURL}/pl/about`,
        pt: `${baseURL}/pt/about`,
        ru: `${baseURL}/ru/about`,
        zh: `${baseURL}/zh/about`,
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

const About = async () => {
  const t = await getTranslations("aboutUs");
  return (
    <>
      <div className={styles.aboutus}>
        <h1 className={styles.heading1}>{t("title")}</h1>
        <p className={styles.paragraph}>{t("content.intro")}</p>
        <h3 className={styles.heading3}>{t("content.sections.titleone")}</h3>
        <Image
          className={styles.img}
          src={conversion}
          alt="Efficient Document Conversion"
        />
        <p className={styles.paragraph}>{t("content.sections.textone")}</p>
        <h3 className={styles.heading3}>{t("content.sections.titletwo")}</h3>
        <Image
          className={styles.img}
          src={multilingual}
          alt="Multilingual Support"
        />
        <p className={styles.paragraph}>{t("content.sections.texttwo")}</p>
        <h3 className={styles.heading3}>{t("content.sections.titlethree")}</h3>
        <Image className={styles.img} src={free} alt="Free and Accessible" />
        <p className={styles.paragraph}>{t("content.sections.textthree")}</p>
      </div>{" "}
    </>
  );
};

export default About;
