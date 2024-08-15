import styles from "@/app/[locale]/termsncondition/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("termsandcondition");

  return {
    title: { absolute: t("metadata.title") },
    description: t("metadata.description"),
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
