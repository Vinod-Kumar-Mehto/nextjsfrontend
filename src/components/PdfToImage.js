"use client";

import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { FcLock } from "react-icons/fc";
import axios from "axios";
import { FcDownload } from "react-icons/fc";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import thumnail from "@/assets/images/pdf.png";
import styles from "@/styles/all.module.css";
import imagepic from "@/assets/images/image.png";
import JSZip from "jszip";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PdfToImage = () => {
  const [selectedPdf, setselectedPdf] = useState([]);
  const [imageResult, setImageResult] = useState([]);
  const [zip, setZip] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [show, setShow] = useState(true);
  const t = useTranslations("pdfToImageConverter");

  const imagepdfResult = selectedPdf.length !== 0 && show;
  const convertShow = isProcessing === false && imageResult.length !== 0;
  let doubleClicks = true;

  const handleRemove = (id) => {
    const result = selectedPdf.filter((data) => data.id !== id);
    setselectedPdf(result);
  };

  const clearAll = () => {
    setselectedPdf([]);
  };

  const startOver = () => {
    setselectedPdf([]);
    setImageResult([]);
  };

  const downloadAll = () => {
    const url = window.URL.createObjectURL(new Blob([zip]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "All images.zip");
    link.click();
  };

  const requestMade = async () => {
    if (!selectedPdf) return;
    setIsProcessing(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < selectedPdf.length; i++) {
        formData.append("files", selectedPdf[i].fileData);
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PORT}/convertpdftoimg`,
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

      setImageResult((preValue) => {
        return [
          ...preValue,
          {
            convertUrl: zip,
            id: uuidv4(),
            name: selectedPdf,
          },
        ];
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
      setselectedPdf([]);
    }

    setIsProcessing(false);
    setShow(false);
  };

  const handleChange = useCallback(
    (e) => {
      const validImageTypes = ["application/pdf"];
      if (e.target.files.length + selectedPdf.length > 2) {
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
      } else if (e.target.files[0].size) {
        if ((e.target.files[0].size / (1024 * 1024)).toFixed(1) > 5.0) {
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
      } else if (e.target.files.length === 0) {
        return;
      } else if (!validImageTypes.includes(e.target.files[0].type)) {
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
      setShow(true);
      if (e.target.files) {
        for (let i = 0; i < e.target.files.length; i++) {
          setselectedPdf((preValue) => {
            return [
              ...preValue,
              {
                fileData: e.target.files[i],
                filename: e.target.files[i].name,
                filetype: e.target.files[i].type,
                filesize: e.target.files[i].size / (1024 * 1024),
                fileImage: URL.createObjectURL(e.target.files[i]),
                id: uuidv4(),
              },
            ];
          });
        }
      }
    },

    [selectedPdf]
  );

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
      {selectedPdf.length === 0 && (
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
                    accept="application/pdf"
                    onChange={handleChange}
                    className={styles.pdfdefaultfileinput}
                    multiple
                  />
                  <br />
                  <br />
                  <span className={styles.pdfbrowsefilestext}>
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
      {imagepdfResult && (
        <div className={styles.pdfformcontainer1}>
          <div className={styles.pdfuploadfilescontainer1}>
            <div className={styles.pdfdragfilearea1}>
              <h2 className={styles.dynamicmessage1}>
                {t("componentTrans.upload2")}
              </h2>
              <br />
              <label className={styles.pdflabel1}>
                <span className={styles.pdfbrowsefiles1}>
                  <input
                    disabled={isProcessing ? "disabled" : ""}
                    type="file"
                    accept="application/pdf"
                    onChange={handleChange}
                    className={styles.pdfdefaultfileinput1}
                    multiple
                  />
                  <br />
                  <span className={styles.pdfbrowsefilestext1}>
                    {t("componentTrans.upload")}
                  </span>
                </span>{" "}
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
                  {selectedPdf.map((img, index) => (
                    <div key={img.id} className={styles.pdffiledetails1}>
                      <div className={styles.boxofname}>
                        <Image
                          width={50}
                          height={50}
                          src={thumnail}
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
              className={styles.dynamicmessage1}
            >
              {t("componentTrans.suggestion")}
            </h4>
            <br />
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
                          src={imagepic}
                          alt="thumb"
                          className={styles.pdffileicon2}
                        />
                        <h6>{t("componentTrans.all")}</h6>
                      </div>
                      <div className={styles.pdfbuttonDC}>
                        <button
                          title={t("componentTrans.allTile")}
                          onClick={() => throttleCallAllDownload()}
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
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default PdfToImage;
