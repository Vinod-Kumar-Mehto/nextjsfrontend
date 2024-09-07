import styles from "@/app/[locale]/privacypolicy/page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const t = await getTranslations("privacyPolicy");
  const lang = params.locale || "en";
  const baseURL = "https://www.imageocr.info";
  const pagePath = "/privacypolicy";
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
        "x-default": `${baseURL}/en/privacypolicy`,
        en: `${baseURL}/en/privacypolicy`,
        de: `${baseURL}/de/privacypolicy`,
        es: `${baseURL}/es/privacypolicy`,
        fr: `${baseURL}/fr/privacypolicy`,
        it: `${baseURL}/it/privacypolicy`,
        ja: `${baseURL}/ja/privacypolicy`,
        ko: `${baseURL}/ko/privacypolicy`,
        pl: `${baseURL}/pl/privacypolicy`,
        pt: `${baseURL}/pt/privacypolicy`,
        ru: `${baseURL}/ru/privacypolicy`,
        zh: `${baseURL}/zh/privacypolicy`,
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

const PrivacyPolicy = async () => {
  const t = await getTranslations("privacyPolicy");
  return (
    <>
      <div className={styles.privacypolicycontainer}>
        <h1 className={styles.heading1}>{t("title")}</h1>
        <div className={styles.privacypolicysection}>
          <p className={styles.paragraph}>
            {t("sections.introduction.paragraph1")}
          </p>
          <p className={styles.paragraph}>
            {t("sections.introduction.paragraph2")}
          </p>
          <p className={styles.paragraph}>
            {t("sections.introduction.paragraph3")}
          </p>
          <p className={styles.paragraph}>
            {t("sections.introduction.paragraph4")}
          </p>
        </div>

        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>
            {t("sections.informationWeCollect.title")}
          </h2>
          <h3 className={styles.heading3}>
            {t("sections.informationWeCollect.personalData.title")}
          </h3>
          <p className={styles.paragraph}>
            {t("sections.informationWeCollect.personalData.paragraph2")}
          </p>

          <h3 className={styles.heading3}>
            {t("sections.informationWeCollect.cookies.title")}
          </h3>
          <p className={styles.paragraph}>
            {t("sections.informationWeCollect.cookies.paragraph1")}
          </p>

          <h3 className={styles.heading3}>
            {t("sections.informationWeCollect.technicalInformation.title")}
          </h3>
          <p className={styles.paragraph}>
            {t("sections.informationWeCollect.technicalInformation.paragraph1")}
          </p>
          <ul className={styles.unlistedlist}>
            <li className={styles.listedlist}>
              {t("sections.informationWeCollect.technicalInformation.detail1")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.informationWeCollect.technicalInformation.detail2")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.informationWeCollect.technicalInformation.detail3")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.informationWeCollect.technicalInformation.detail4")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.informationWeCollect.technicalInformation.detail5")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.informationWeCollect.technicalInformation.detail6")}
            </li>
          </ul>
        </div>

        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>{t("sections.yourRights.title")}</h2>
          <p className={styles.paragraph}>
            {t("sections.yourRights.paragraph1")}
          </p>
        </div>
        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>
            {t("sections.ccpaPrivacyRights.title")}
          </h2>
          <p className={styles.paragraph}>
            {t("sections.ccpaPrivacyRights.paragraph1")}
          </p>
          <ul className={styles.unlistedlist}>
            <li className={styles.listedlist}>
              {t("sections.ccpaPrivacyRights.right1")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.ccpaPrivacyRights.right2")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.ccpaPrivacyRights.right3")}
            </li>
          </ul>
          <p className={styles.paragraph}>
            {t("sections.ccpaPrivacyRights.paragraph2")}
          </p>
        </div>
        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>
            {t("sections.gdprDataProtectionRights.title")}
          </h2>
          <p className={styles.paragraph}>
            {t("sections.gdprDataProtectionRights.paragraph1")}
          </p>
          <ul className={styles.unlistedlist}>
            <li className={styles.listedlist}>
              {t("sections.gdprDataProtectionRights.right1")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.gdprDataProtectionRights.right2")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.gdprDataProtectionRights.right3")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.gdprDataProtectionRights.right4")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.gdprDataProtectionRights.right5")}
            </li>
            <li className={styles.listedlist}>
              {t("sections.gdprDataProtectionRights.right6")}
            </li>
          </ul>
          <p className={styles.paragraph}>
            {t("sections.gdprDataProtectionRights.paragraph2")}
          </p>
        </div>
        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>
            {t("sections.locationOfDataProcessing.title")}
          </h2>
          <p className={styles.paragraph}>
            {t("sections.locationOfDataProcessing.paragraph1")}
          </p>
          <p className={styles.paragraph}>
            {t("sections.locationOfDataProcessing.paragraph2")}
          </p>
        </div>
        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>
            {t("sections.changesToPolicy.title")}
          </h2>
          <p className={styles.paragraph}>
            {t("sections.changesToPolicy.paragraph1")}
          </p>
        </div>

        <div className={styles.privacypolicysection}>
          <h2 className={styles.heading2}>
            {t("sections.thirdPartyAdvertising.title")}
          </h2>
          <p className={styles.paragraph}>
            {t("sections.thirdPartyAdvertising.paragraph1")}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
