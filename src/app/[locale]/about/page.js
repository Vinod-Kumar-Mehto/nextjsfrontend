import styles from "@/app/[locale]/about/page.module.css";
import conversion from "@/assets/images/conversion.png";
import free from "@/assets/images/free.png";
import multilingual from "@/assets/images/multilingual.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("aboutUs");

  return {
    title: { absolute: t("metadata.title") },
    description: t("metadata.description"),
    openGraph: {
      title: { absolute: t("metadata.title") },
      description: t("metadata.description"),
      URL: "https://www.imageocr.info/about",
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
