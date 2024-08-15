import styles from "@/styles/all.module.css";
import PdfToExcel from "@/components/PdfToExcel";
import Image from "next/image";
import feature from "@/assets/images/feature.png";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("pdfToExcelConverter");

  return {
    title: { absolute: t("metadata.title") },
    description: t("metadata.description"),
  };
}

const Pdftoexcel = async () => {
  const t = await getTranslations("pdfToExcelConverter");
  return (
    <>
      <div className={styles.pdfformcontainer}>
        <div className={styles.pdfheading}>
          <h1 className={styles.heading1}> {t("title")}</h1>
          <br />
          <h4 className={styles.heading4}>{t("description")}</h4>
        </div>
        <PdfToExcel />
      </div>

      <div className={styles.textContent}>
        <div className={styles.textcontentdiv}>
          <h1 className={styles.textheading1}>{t("onlineConvert.heading")}</h1>
          <p className={styles.textcontentpara}>{t("onlineConvert.content")}</p>
        </div>
        <div className={styles.textcontentdiv}>
          <h1 className={styles.textheading1}>{t("howToConvert.heading")}</h1>
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
        <div className={styles.textcontentdiv}>
          <Image
            src={feature}
            className={styles.featureimg}
            alt="featureimage"
          />
          <h1 className={styles.textheading1}>{t("keyFeatures.heading")} </h1>
          <div className={styles.textcontentdiv}>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleF")}{" "}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionF")}
            </p>
            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleB")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptionB")}{" "}
            </p>

            <h3 className={styles.textheading3}>
              {t("keyFeatures.features.titleE")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("keyFeatures.features.descriptiononeE")}
              <br />
              {t("keyFeatures.features.descriptiontwoE")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pdftoexcel;
