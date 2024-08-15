"use client";

import Link from "next/link";
import styles from "@/styles/footer.module.css";
import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const Footer = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("footer");

  const LanguageChangeCall = (lang) => {
    startTransition(() => {
      router.replace(
        window.location.href.substring(
          window.location.href.lastIndexOf("/") + 1
        ).length === 2
          ? `/${lang}`
          : `/${lang}/${window.location.href.substring(
              window.location.href.lastIndexOf("/") + 1
            )}`
      );
    });
  };

  const changeLanguage = (e) => {
    const nextLocale = e.target.value;
    LanguageChangeCall(nextLocale);
  };

  useEffect(() => {
    LanguageChangeCall(localActive);
  }, []);

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerlinks}>
        <li className={styles.listitem}>
          <Link as="about" href="/about">
            {t("links.labelone")}
          </Link>
        </li>
        <li className={styles.listitem}>
          <Link as="faq" href="/faq">
            {t("links.labeltwo")}
          </Link>
        </li>
        <li className={styles.listitem}>
          <Link as="termsncondition" href="/termsncondition">
            {t("links.labelthree")}
          </Link>
        </li>
        <li className={styles.listitem}>
          <Link as="privacypolicy" href="/privacypolicy">
            {t("links.labelfour")}
          </Link>
        </li>
        <li className={styles.listitem}>
          <Link as="contactus" href="/contactus">
            {t("links.labelfive")}
          </Link>
        </li>
      </ul>
      <div className={styles.footerlanguage}>
        <label htmlFor={styles.languageselect}>{t("languageLabel")}: </label>
        <select
          defaultValue={localActive}
          id={styles.languageselect}
          onChange={changeLanguage}
        >
          <option value="en">ENGLISH</option>
          <option value="de">DEUTSCH</option>
          <option value="es">ESPAÑOL</option>
          <option value="fr">FRANÇAIS</option>
          <option value="it">ITALIANO</option>
          <option value="pt">PORTUGUÊS</option>
          <option value="ja">日本語</option>
          <option value="pl">POLSKI</option>
          <option value="ko">한국어</option>
          <option value="ru">РУССКИЙ</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <div className={styles.footercopyright}>Copyright ©2024</div>
    </footer>
  );
};

export default Footer;
