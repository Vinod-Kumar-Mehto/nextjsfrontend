import styles from "@/app/[locale]/imagetotext/page.module.css";
import printedDoc from "@/assets/images/documents.png";
import healthcare from "@/assets/images/healthcare.png";
import education from "@/assets/images/education.png";
import legal from "@/assets/images/legal.png";
import translation from "@/assets/images/translation.png";
import Image from "next/image";
import ImgToText from "@/components/ImgToText";
import feature from "@/assets/images/feature.png";
import { getTranslations } from "next-intl/server";

const ImageToText = async () => {
  const t = await getTranslations("imgtotext");

  return (
    <>
      <div className={styles.formcontainer}>
        <div className={styles.heading}>
          <h1 className={styles.containerheading}>
            {t("imageToTextConverter.title")}
          </h1>
          <br />
          <h4 className={styles.containerheading4}>
            {t("imageToTextConverter.description")}
          </h4>
        </div>
        <ImgToText />
      </div>

      <div className={styles.textContent}>
        <div className={styles.textcontentdiv}>
          <h1 className={styles.textheading}>
            {t("imageToTextConverter.whatIs.heading")}
          </h1>

          <p className={styles.textcontentpara}>
            {t("imageToTextConverter.whatIs.contentone")} <br />
            <br />
            {t("imageToTextConverter.whatIs.contenttwo")}
          </p>
        </div>
        <div className={styles.textcontentdiv}>
          <h1 className={styles.textheading}>
            {t("imageToTextConverter.howItWorks.heading")}
          </h1>
          <br />

          <ul className={styles.textcontentul}>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.stepone")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.steptwo")}
              </p>
            </li>
            <li>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.stepthree")}
              </p>
            </li>
            <li className={styles.textcontentli}>
              <p className={styles.textcontentpara}>
                {t("imageToTextConverter.howItWorks.steps.stepfour")}
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.textcontentdiv}>
          <Image alt="keyfeature" src={feature} className={styles.featureimg} />
          <h1 className={styles.textheading}>
            {t("imageToTextConverter.keyFeatures.heading")}
          </h1>
          <div>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.keyFeatures.features.titleone")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.keyFeatures.features.descriptionone")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.keyFeatures.features.titletwo")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.keyFeatures.features.descriptiontwo")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.keyFeatures.features.titlethree")}
            </h3>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.keyFeatures.features.descriptionthree")}
            </p>
          </div>
        </div>

        <div className={styles.textcontentdiv}>
          <h1 className={styles.textheading}>
            {t("imageToTextConverter.benefits.heading")}
          </h1>
          <div>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titledigi")}
            </h3>
            <Image alt="documents" className={styles.img} src={printedDoc} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiondigione")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiondigitwo")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiondigithree")}{" "}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titlehealtwo")}
            </h3>
            <Image alt="healthcare" className={styles.img} src={healthcare} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionheaone")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionheatwo")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titleedthree")}
            </h3>
            <Image alt="education" className={styles.img} src={education} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptioned")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titlelefour")}
            </h3>
            <Image alt="legal" className={styles.img} src={legal} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionleone")}
            </p>
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptionletwo")}
            </p>
            <h3 className={styles.textheading3}>
              {t("imageToTextConverter.benefits.benefits.titletrfive")}{" "}
            </h3>
            <Image alt="translation" className={styles.img} src={translation} />
            <p className={styles.textcontentpara}>
              {t("imageToTextConverter.benefits.benefits.descriptiontr")}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageToText;
