"use client";

import { useState } from "react";
import styles from "@/styles/contact.module.css";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const t = useTranslations("contactus");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error(`${t("componentTrans.error")}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      const data = await response.json();
      if (data.message) {
        toast.success(`${t("componentTrans.success")}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(`${t("componentTrans.error")}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={styles.contactform} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={t("placeholder.name")}
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.inputarea}
      />

      <input
        type="email"
        name="email"
        placeholder={t("placeholder.email")}
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.inputarea}
      />

      <textarea
        name="message"
        placeholder={t("placeholder.message")}
        value={formData.message}
        onChange={handleChange}
        required
        className={styles.textareaa}
      />

      <button type="submit" className={styles.buttonn}>
        {t("placeholder.send")}
      </button>
    </form>
  );
};

export default ContactForm;
