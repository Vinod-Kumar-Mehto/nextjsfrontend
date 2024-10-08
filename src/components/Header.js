"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/header.module.css";
import { useTranslations } from "next-intl";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const t = useTranslations("navbar");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShow(false); // Close the burger menu if clicked outside the nav bar
      }
    };

    const handleScroll = () => {
      setShow(false); // Close the burger menu on scroll
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.iconnav}>
          <span className={styles.logo}>
            <Image
              alt="logo"
              className={styles.logo}
              src={logo}
              width={95}
              height={95}
            />
          </span>
        </div>

        <ul className={`${styles.listnavbar} ${show ? styles.active : ""}`}>
          <li className={styles.listitem}>
            <Link as="pdftoimage" href="/pdftoimage">
              {t("items.labelone")}
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link as="pdftoword" href="/pdftoword">
              {t("items.labeltwo")}
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link as="/" href="/">
              {t("items.labelthree")}
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link as="pdftoexcel" href="/pdftoexcel">
              {t("items.labelfour")}
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link as="imagetopdf" href="/imagetopdf">
              {t("items.labelfive")}
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link as="wordtopdf" href="/wordtopdf">
              {t("items.labelsix")}
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.fas} ${styles.burgermenu}`}
          id={styles.burgermenu}
          onClick={() => setShow(!show)}
        >
          &#9776;
        </div>
        <div className={styles.iconnavfree}></div>
      </nav>
    </>
  );
};

export default Header;
