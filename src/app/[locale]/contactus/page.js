import styles from "@/app/[locale]/contactus/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("contactus");

  return {
    title: { absolute: t("metadata.title") },
    description: t("metadata.description"),
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
