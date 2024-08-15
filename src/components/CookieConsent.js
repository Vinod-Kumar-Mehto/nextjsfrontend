"use client";

import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/cookie.module.css";
import { useTranslations } from "next-intl";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const t = useTranslations("cookieconsentpage");

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {
      maxAge: 31536000,
      secure: true,
      httpOnly: false,
    });
  };

  const declineCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {
      maxAge: 31536000,
      secure: true,
      httpOnly: false,
    });
  };

  if (showConsent) {
    return null;
  }

  return (
    <>
      <div className={styles.cookieoverlay}></div>
      <div className={styles.cookieconsentbanner}>
        <div className={styles.cookieconsentbannerinner}>
          <div className={styles.cookieconsentbannercopy}>
            <div className={styles.cookieconsentbannerheader}>
              {t("header")}
            </div>
            <div className={styles.cookieconsentbannerdescription}>
              {t("paragraph1")}{" "}
              <span className={styles.privacy}>
                <Link as="privacypolicy" href="/privacypolicy">
                  {t("link")}
                </Link>
              </span>
            </div>
          </div>

          <div className={styles.cookieconsentbanneractions}>
            <a onClick={acceptCookie} className={styles.cookieconsentbannercta}>
              {t("Name1")}
            </a>
            <a
              onClick={declineCookie}
              className={styles.cookieconsentbannerdta}
            >
              {t("Name2")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
