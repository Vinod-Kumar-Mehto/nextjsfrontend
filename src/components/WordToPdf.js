"use client";

import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { FcLock } from "react-icons/fc";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { FcDownload } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";
import wordthumnail from "@/assets/images/word.png";
import pdfthumnail from "@/assets/images/pdf.png";
import styles from "@/styles/all.module.css";
import JSZip from "jszip";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PdfToWord = () => {
  const [selectedPdf, setselectedPdf] = useState([]);
  const [pdfResult, setpdfResult] = useState([]);
  const [zip, setZip] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [show, setShow] = useState(true);
  const t = useTranslations("wordToPdfConverter");

  const imagepdfResult = selectedPdf.length !== 0 && show;
  const convertShow = isProcessing === false && pdfResult.length !== 0;
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
    setpdfResult([]);
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
    if (!selectedPdf) return;
    setIsProcessing(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < selectedPdf.length; i++) {
        formData.append("files", selectedPdf[i].fileData);
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PORT}/wordtopdf`,
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
        setpdfResult((preValue) => {
          return [
            ...preValue,
            {
              convertUrl: fileBlob,
              id: uuidv4(),
              name: selectedPdf,
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
      setselectedPdf([]);
    }

    setIsProcessing(false);
    setShow(false);
  };

  const handleChange = useCallback(
    (e) => {
      const validWordTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
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
      }
      const files = Array.from(e.target.files);
      for (const file of files) {
        if (!validWordTypes.includes(file.type)) {
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
        } else if (file.size / (1024 * 1024) > 5.0) {
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
                id: uuidv4(),
              },
            ];
          });
        }
      }
    },

    [selectedPdf]
  );

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
                    accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
              title="Your files will be automatically deleted from the server within 2 hours"
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
                    accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
                  {selectedPdf.map((pdffile, index) => (
                    <div key={index} className={styles.pdffiledetails1}>
                      <div className={styles.boxofname}>
                        <Image
                          width={50}
                          height={50}
                          src={wordthumnail}
                          alt="thumb"
                          className={styles.pdffileicon}
                        />
                        <div className={styles.pdffileNameIma}>
                          <h5>{pdffile.filename.split(/[_\-.]/)[0]}</h5>

                          <p className={styles.paragraphsize}>
                            {pdffile.filesize.toFixed(1)}MB
                          </p>
                        </div>
                      </div>
                      <button
                        title="Delete file"
                        disabled={isProcessing ? "disabled" : ""}
                        onClick={() => handleRemove(pdffile.id)}
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
                <div className={styles.pdffileuploadcontainer2}>
                  {pdfResult.map((res, index) => (
                    <div key={res.id} className={styles.pdffiledetails2}>
                      <div className={styles.thumSec}>
                        <Image
                          width={70}
                          height={70}
                          src={pdfthumnail}
                          alt="thumb"
                          className={styles.pdffileicon2}
                        />

                        <h6>{res.WordName}</h6>
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
                {t("componentTrans.allDownload")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PdfToWord;
