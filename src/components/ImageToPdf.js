"use client";

import React, { useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FcLock } from "react-icons/fc";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { FcDownload } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import thumnail from "@/assets/images/pdf.png";
import styles from "@/styles/all.module.css";
import JSZip from "jszip";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ImageToPdf = () => {
  const [selectedImage, setselectedImage] = useState([]);
  const [imageResult, setImageResult] = useState([]);
  const [zip, setZip] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [show, setShow] = useState(true);
  const t = useTranslations("imageToPdfConverter");

  const imagepdfResult = selectedImage.length !== 0 && show;
  const convertShow = isProcessing === false && imageResult.length !== 0;
  let doubleClicks = true;

  const handleRemove = (id) => {
    const result = selectedImage.filter((data) => data.id !== id);
    setselectedImage(result);
  };

  const clearAll = () => {
    setselectedImage([]);
  };

  const startOver = () => {
    setselectedImage([]);
    setImageResult([]);
  };

  const handleDownload = (reUrl, name) => {
    const url = window.URL.createObjectURL(new Blob([reUrl]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", name);
    link.click();
  };

  const downloadAll = () => {
    const url = window.URL.createObjectURL(new Blob([zip]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "files.zip");
    link.click();
  };

  const requestMade = async () => {
    if (!selectedImage) return;
    setIsProcessing(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < selectedImage.length; i++) {
        formData.append("image", selectedImage[i].fileData);
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PORT}/convertimg`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob", // Ensure response is treated as a blob (binary data)
        }
      );

      setZip(response.data);
      const zip = new JSZip();
      const zipFile = await zip.loadAsync(response.data);
      zipFile.forEach(async (relativePath, zipEntry) => {
        const fileBlob = await zipEntry.async("blob");
        setImageResult((preValue) => {
          return [
            ...preValue,
            {
              convertUrl: fileBlob,
              id: uuidv4(),
              name: selectedImage,
              WordName: zipEntry.name,
            },
          ];
        });
      });
    } catch (error) {
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
      setselectedImage([]);
    }

    setIsProcessing(false);
    setShow(false);
  };

  const handleChange = useCallback(
    (e) => {
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

        return;
      }

      const files = e.target.files ? e.target.files : e.clipboardData.items;
      setShow(true);
      if (!files.length) {
        setselectedImage([]);
        setIsProcessing(false);
        setShow(false);
        return;
      } else if (e.target.files) {
        if (!validImageTypes.includes(e.target.files[0].type)) {
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
          setselectedImage([]);
          setIsProcessing(false);
          setShow(false);
          return;
        }

        if (e.target.files) {
          for (let i = 0; i < e.target.files.length; i++) {
            setselectedImage((preValue) => {
              return [
                ...preValue,
                {
                  fileData: e.target.files[i],
                  filename: e.target.files[i].name,
                  filetype: e.target.files[i].type,
                  filesize: e.target.files[i].size / (1024 * 1024),
                  fileImg: URL.createObjectURL(e.target.files[i]),
                  id: uuidv4(),
                },
              ];
            });
          }
        }
      } else if (validImageTypes.includes(e.clipboardData.items[0].type)) {
        for (let i = 0; i < e.clipboardData.items.length; i++) {
          const item = e.clipboardData.items[i];
          const blob = item.getAsFile();
          if (item.type.indexOf("image") !== -1) {
            const reader = new FileReader();

            reader.readAsDataURL(blob);
          }
          setselectedImage((prevValue) => [
            ...prevValue,
            {
              fileData: blob,
              filename: blob.name ? blob.name.slice(0, 10) : "",
              filetype: blob.type,
              filesize: blob.size / (1024 * 1024),
              fileImg: URL.createObjectURL(blob),
              id: uuidv4(),
            },
          ]);
        }
      } else {
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
    },
    [selectedImage]
  );

  useEffect(() => {
    // Define the paste handler
    const handlePaste = (event) => {
      if (!convertShow) {
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
  }, [convertShow, handleChange]);

  const throttleCallOneDownload = (url, name) => {
    if (doubleClicks === true) {
      handleDownload(url, name);
      doubleClicks = false;
      setTimeout(() => {
        doubleClicks = true;
      }, 1500);
    }
  };

  const throttleCallAllDownload = () => {
    if (doubleClicks === true) {
      downloadAll();
      doubleClicks = false;
      setTimeout(() => {
        doubleClicks = true;
      }, 1500);
    }
  };

  return (
    <>
      {selectedImage.length === 0 && (
        <div className={styles.pdfformcontainer}>
          <div className={styles.pdfuploadfilescontainer}>
            <div className={styles.pdfdragfilearea}>
              <h3 className={styles.dynamicmessage}>
                {t("componentTrans.message")}
              </h3>
              <br />
              <label className={styles.pdflabel}>
                <span className={styles.pdfbrowsefiles}>
                  {t("componentTrans.support")}
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className={styles.pdfdefaultfileinput}
                    multiple
                  />
                  <br />
                  <br />
                  <span className={styles.pdfbrowsefilestext}>
                    {t("componentTrans.upload")}
                  </span>
                </span>
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

      {imagepdfResult && (
        <div className={styles.pdfformcontainer1}>
          <div className={styles.pdfuploadfilescontainer1}>
            <div className={styles.pdfdragfilearea1}>
              <h3 className={styles.dynamicmessage1}>
                {t("componentTrans.message")}
              </h3>
              <br />
              <label className={styles.pdflabel1}>
                <span className={styles.pdfbrowsefiles1}>
                  <input
                    disabled={isProcessing ? "disabled" : ""}
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className={styles.pdfdefaultfileinput1}
                    multiple
                  />
                  <br />
                  <span className={styles.pdfbrowsefilestext1}>
                    {t("componentTrans.upload")}
                  </span>
                </span>
              </label>
              <br />
              <div>
                <div className={styles.pdffileuploadcontainer1}>
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
                    <div key={img.id} className={styles.pdffiledetails1}>
                      <div className={styles.boxofname}>
                        <Image
                          width={50}
                          height={50}
                          src={img.fileImg}
                          alt="thumb"
                          className={styles.pdffileicon}
                        />
                        <div className={styles.pdffilenameima}>
                          <h5>{img.filename.split(/[_\-.]/)[0]}</h5>
                          <p>{img.filesize.toFixed(1)}MB</p>
                        </div>
                      </div>
                      <button
                        disabled={isProcessing ? "disabled" : ""}
                        onClick={() => handleRemove(img.id)}
                        className={styles.pdfremovebutton}
                      >
                        <RiDeleteBin5Line size={17} fill="red" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.pdfuploadbuttongroup}>
              <button
                disabled={isProcessing ? "disabled" : ""}
                onClick={clearAll}
                type="button"
                className={styles.pdfuploadbutton1}
              >
                {t("componentTrans.clear")}
              </button>
              <button
                disabled={isProcessing ? "disabled" : ""}
                onClick={requestMade}
                type="button"
                className={styles.pdfuploadbutton1}
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
          </div>
        </div>
      )}

      {convertShow && (
        <div className={styles.pdfformcontainer2}>
          <div className={styles.pdfuploadfilescontainer2}>
            <div className={styles.pdfdragfilearea2}>
              <br />
              <br />
              <div>
                <div className={styles.pdffileuploadcontainer1}>
                  {imageResult.map((res, index) => (
                    <div key={res.id} className={styles.pdffiledetails2}>
                      <div className={styles.thumSec}>
                        <Image
                          width={70}
                          height={70}
                          src={thumnail}
                          alt="thumb"
                          className={styles.pdffileicon2}
                        />
                        <h6>{res.name[index].filename.split(/[_\-.]/)[0]}</h6>
                      </div>
                      <br />
                      <div className={styles.pdfbuttonDC}>
                        <button
                          title={t("componentTrans.fileTitle")}
                          onClick={() =>
                            throttleCallOneDownload(
                              res.convertUrl,
                              res.WordName
                            )
                          }
                          className={styles.Download}
                        >
                          <FcDownload size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.pdfuploadbutton2}>
              <button
                onClick={startOver}
                type="button"
                className={styles.pdfuploadbutton1}
              >
                <VscDebugRestart />
                {t("componentTrans.over")}
              </button>
              <button
                onClick={() => throttleCallAllDownload()}
                type="button"
                className={styles.pdfuploadbutton1}
              >
                {t("componentTrans.all")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageToPdf;
