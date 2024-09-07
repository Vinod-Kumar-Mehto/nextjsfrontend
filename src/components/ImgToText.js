"use client";
import React, { useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { createWorker } from "tesseract.js";
import { FcDownload, FcLock, FcCopyright } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ImgToText = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [textResult, setTextResult] = useState([]);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [show, setShow] = useState(true);
  const t = useTranslations("imgtotext");
  const [lang, setLang] = useState([
    {
      id: 0,
      langType: "eng",
    },
    {
      id: 1,
      langType: "eng",
    },
    {
      id: 2,
      langType: "eng",
    },
    {
      id: 3,
      langType: "eng",
    },
  ]);

  const imageTextResult = selectedImage.length !== 0 && show;
  const convertShow = isProcessing === false && textResult.length !== 0;
  const languages = [
    { value: "eng", name: "English" },
    { value: "deu", name: "German" },
    { value: "fra", name: "French" },
    { value: "ita", name: "Italian" },
    { value: "spa", name: "Spanish" },
    { value: "por", name: "Portuguese" },
    { value: "nld", name: "Dutch" },
    { value: "dan", name: "Danish" },
    { value: "fin", name: "Finnish" },
    { value: "nor", name: "Norwegian" },
    { value: "pol", name: "Polish" },
    { value: "swe", name: "Swedish" },
    { value: "tur", name: "Turkish" },
    { value: "ell", name: "Greek" },
    { value: "hin", name: "Hindi" },
    { value: "jpn", name: "Japanese" },
    { value: "kor", name: "Korean" },
    { value: "chi_sim", name: "Chinese" },
    { value: "rus", name: "Russian" },
    { value: "ara", name: "Arabic" },
    { value: "heb", name: "Hebrew" },
    { value: "tha", name: "Thai" },
    { value: "vie", name: "Vietnamese" },
    { value: "ind", name: "Indonesian" },
    { value: "mal", name: "Malay" },
    { value: "swa", name: "Swahili" },
    { value: "tam", name: "Tamil" },
    { value: "tel", name: "Telugu" },
    { value: "urd", name: "Urdu" },
    { value: "ukr", name: "Ukrainian" },
    { value: "bul", name: "Bulgarian" },
    { value: "hun", name: "Hungarian" },
    { value: "ces", name: "Czech" },
    { value: "slk", name: "Slovak" },
    { value: "ron", name: "Romanian" },
  ];

  let doubleClicks = true;

  const setLanguage = useCallback(
    (e, id) => {
      try {
        e.currentTarget.parentNode.parentNode.children[2].disabled = true;
        const settingLang = lang.map((L) => {
          if (L.id !== id) {
            return L;
          } else {
            return {
              ...L,
              langType: e.target.value,
            };
          }
        });
        setLang(settingLang);
      } catch (er) {
        toast.error(`🚀${t("componentTrans.error")}🚀`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSelectedImage([]);
      }
    },
    [lang]
  );

  const handleRemove = (id) => {
    const result = selectedImage.filter((data) => data.id !== id);
    setSelectedImage(result);
  };

  const clearAll = () => {
    setSelectedImage([]);
  };

  const startOver = () => {
    setSelectedImage([]);
    setTextResult([]);
  };

  const handleDownload = (text, name) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${name}.txt`;
    element.click();
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const requestMade = async () => {
    try {
      if (selectedImage) {
        setIsProcessing(true);

        for (let i = 0; i < selectedImage.length; i++) {
          const worker = await createWorker(lang[i].langType);
          const ret = await worker.recognize(selectedImage[i].fileImg);

          setTextResult((preValue) => {
            return [
              ...preValue,
              {
                convertText: ret.data.text,
                id: uuidv4(),
                images: selectedImage[i].fileImg,
                filename: selectedImage[i].filename,
                filetype: selectedImage[i].filetype,
              },
            ];
          });
          await worker.terminate();
        }
        setIsProcessing(false);
        setShow(false);
      }
    } catch (er) {
      toast.error(`🚀${t("componentTrans.error2")}🚀`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setSelectedImage([]);
      setIsProcessing(false);
      setShow(false);
    }
  };

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      const validImageTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/gif",
      ];

      if (
        (e.target.files ? e.target.files.length : 0) +
          (e.clipboardData ? e.clipboardData.items.length : 0) +
          selectedImage.length >
        4
      ) {
        toast.error(`🚀${t("componentTrans.error3")}🚀`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      const files = e.target.files ? e.target.files : e.clipboardData.items;
      setShow(true);
      if (!files.length) {
        setSelectedImage([]);
        setIsProcessing(false);
        setShow(false);
        return;
      } else if (e.target.files) {
        if (!validImageTypes.includes(e.target.files[0].type)) {
          toast.error(`🚀${t("componentTrans.error4")}🚀`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setSelectedImage([]);
          setIsProcessing(false);
          setShow(false);
          return;
        }

        for (let i = 0; i < e.target.files.length; i++) {
          setSelectedImage((preValue) => {
            return [
              ...preValue,
              {
                filename: e.target.files[i].name.slice(0, 10),
                filetype: e.target.files[i].type,
                filesize: e.target.files[i].size / (1024 * 1024),
                fileImg: URL.createObjectURL(e.target.files[i]),
                id: uuidv4(),
              },
            ];
          });
        }
      } else if (validImageTypes.includes(e.clipboardData.items[0].type)) {
        for (let i = 0; i < e.clipboardData.items.length; i++) {
          const item = e.clipboardData.items[i];
          const blob = item.getAsFile();
          if (item.type.indexOf("image") !== -1) {
            const reader = new FileReader();

            reader.readAsDataURL(blob);
          }

          setSelectedImage((prevValue) => [
            ...prevValue,
            {
              filename: blob.name ? blob.name.slice(0, 10) : "",
              filetype: blob.type,
              filesize: blob.size / (1024 * 1024),
              fileImg: URL.createObjectURL(blob),
              id: uuidv4(),
            },
          ]);
        }
      } else {
        toast.error(`🚀${t("componentTrans.error4")}🚀`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
    },
    [selectedImage]
  );

  useEffect(() => {
    // Define the paste handler
    const handlePaste = (event) => {
      if (!convertShow && !isProcessing) {
        handleChange(event); // Only call handleChange if convertShow is false
      } else {
        event.preventDefault(); // Prevent pasting if convertShow is true
      }
    };

    // Add the paste event listener
    document.addEventListener("paste", handlePaste);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [convertShow, handleChange, isProcessing]);

  const throttleCallOneDownload = (url, name) => {
    if (doubleClicks === true) {
      handleDownload(url, name);
      doubleClicks = false;
      setTimeout(() => {
        doubleClicks = true;
      }, 1500);
    }
  };

  return (
    <>
      {selectedImage.length === 0 && (
        <div className={styles.formcontainer}>
          <div className={styles.uploadfilescontainer}>
            <div className={styles.dragfilearea}>
              <h3 className={styles.dynamicmessage}>
                {t("componentTrans.message")}
              </h3>
              <br />
              <label className={styles.label}>
                <span className={styles.browsefiles}>
                  {t("componentTrans.support")}
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className={styles.defaultfileinput}
                    multiple
                  />
                  <br />
                  <br />
                  <span htmlFor="fileInput" className={styles.browsefilestext}>
                    {t("componentTrans.upload")}
                  </span>
                </span>{" "}
              </label>
            </div>
            <h5
              title={t("componentTrans.titleone")}
              style={{
                cursor: "pointer",
                fontFamily: "revert-layer",
                color: "darkgreen",
                fontSize: "14px",
                display: "inline-flex",
              }}
            >
              <FcLock size={17} /> {t("componentTrans.secure")}
            </h5>
          </div>
        </div>
      )}

      {imageTextResult && (
        <div className={styles.formcontainer1}>
          <div className={styles.uploadfilescontainer1}>
            <div className={styles.dragfilearea1}>
              <h3 className={styles.dynamicmessage}>
                {t("componentTrans.upload2")}
              </h3>
              <br />
              <label className={styles.label1}>
                <span className={styles.browsefiles1}>
                  <input
                    disabled={isProcessing ? "disabled" : ""}
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className={styles.defaultfileinput1}
                    multiple
                  />
                  <br />
                  <span className={styles.browsefilestext1}>
                    {t("componentTrans.upload")}
                  </span>
                </span>{" "}
              </label>
              <br />
              <div>
                <div className={styles.fileuploadcontainer1}>
                  {isProcessing ? (
                    <div className={styles.spinner}>
                      <div className={styles.react1}></div>
                      <div className={styles.react2}></div>
                      <div className={styles.react3}></div>
                      <div className={styles.react4}></div>
                      <div className={styles.react5}></div>
                      <div className={styles.react6}></div>
                      <div className={styles.react7}></div>
                      <div className={styles.react8}></div>
                      <div className={styles.react9}></div>
                      <div className={styles.react10}></div>
                    </div>
                  ) : null}
                  {selectedImage.map((img, index) => (
                    <div key={index} className={styles.filedetails1}>
                      <div className={styles.boxofname}>
                        <Image
                          width={70}
                          height={70}
                          src={img.fileImg}
                          alt="thumb"
                          className={styles.fileicon}
                        />
                        <div className={styles.fileNameIma}>
                          <h5>
                            {img.filename.split(/[_\-.]/)}.
                            {img.filetype.split("/")[1]}
                          </h5>

                          <p className={styles.paragraphsize}>
                            {img.filesize.toFixed(1)}MB
                          </p>
                        </div>
                      </div>
                      <div>
                        <span>
                          {" "}
                          <p className={styles.lanpara}>
                            {t("componentTrans.selectLang")}
                          </p>
                        </span>

                        <select
                          onChange={(e) => setLanguage(e, index)}
                          className={styles.select}
                        >
                          {languages.map((language) => (
                            <option key={language.value} value={language.value}>
                              {language.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        disabled={isProcessing ? "disabled" : ""}
                        onClick={() => handleRemove(img.id)}
                        className={styles.removebutton}
                      >
                        <RiDeleteBin5Line size={17} fill="red" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.uploadbuttongroup}>
              <button
                disabled={isProcessing ? "disabled" : ""}
                onClick={clearAll}
                type="button"
                className={styles.uploadbutton1}
              >
                {t("componentTrans.clear")}
              </button>
              <button
                disabled={isProcessing ? "disabled" : ""}
                onClick={requestMade}
                type="button"
                className={styles.uploadbutton1}
              >
                {t("componentTrans.convert")}
              </button>
            </div>
            <h4
              style={{ fontFamily: "revert-layer", color: "green" }}
              className={styles.dynamicmessage}
            >
              {t("componentTrans.suggestion")}
            </h4>
            <br />
          </div>
        </div>
      )}

      {convertShow && (
        <div className={styles.formcontainer2}>
          <div className={styles.uploadfilescontainer2}>
            <div className={styles.dragfilearea2}>
              <br />
              <br />
              <div className={styles.fileuploadcontainer2}>
                <div>
                  {textResult.map((res, index) => (
                    <div key={res.id} className={styles.filedetails2}>
                      <div>
                        <Image
                          width={70}
                          height={70}
                          src={res.images}
                          alt="thumb"
                          className={styles.fileicon2}
                        />

                        <h6>
                          {res.filename.split(/[_\-.]/)}.
                          {res.filetype.split("/")[1]}
                        </h6>
                      </div>
                      <textarea
                        className={styles.textareaa}
                        value={res.convertText.trim().replace(/\s+/g, " ")}
                        onChange={(e) => setText(res.convertText)}
                      ></textarea>
                      <br />
                      <div className={styles.buttonDCtext}>
                        <button
                          title={t("componentTrans.titletwo")}
                          onClick={() =>
                            throttleCallOneDownload(
                              res.convertText,
                              res.filename
                            )
                          }
                          className={styles.Download}
                        >
                          <FcDownload size={20} />
                        </button>
                        <br />
                        <br />

                        <button
                          title={t("componentTrans.titlethree")}
                          onClick={() => handleCopy(res.convertText)}
                          className={styles.copy}
                        >
                          <FcCopyright size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={startOver}
              type="button"
              className={styles.uploadbutton2}
            >
              <VscDebugRestart />
              {t("componentTrans.over")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgToText;
