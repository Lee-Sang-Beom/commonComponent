"use client";

import React, { useEffect, useState } from "react";
import Style from "./PdfViewer.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import {
  BiChevronLeft,
  BiChevronRight,
  BiFirstPage,
  BiLastPage,
} from "react-icons/bi";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfViewerProps {
  serverFileNm: string;
}

const PdfViewer = ({ serverFileNm }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(2);
  const [file, setFile] = useState("");

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    setPageNumber(1);
    fetch(process.env.NEXT_PUBLIC_HOST + "/utils/files/image/" + serverFileNm, {
      method: "GET",
    })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        setFile(url);
      });
  }, [serverFileNm]);

  return (
    <div className={Style.comp_wrap}>
      <div className={Style.pdf_wrap}>
        {file !== "" ? (
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              width={400}
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        ) : null}
      </div>
      <div className={Style.paging_wrap}>
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    if (pageNumber !== 1) {*/}
        {/*      setPageNumber((old) => old - 1);*/}
        {/*    }*/}
        {/*  }}*/}
        {/*>*/}
        {/*  이전*/}
        {/*</button>*/}
        {/*<span>*/}
        {/*  {pageNumber} / {numPages}*/}
        {/*</span>*/}
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    if (pageNumber !== numPages) {*/}
        {/*      setPageNumber((old) => old + 1);*/}
        {/*    }*/}
        {/*  }}*/}
        {/*>*/}
        {/*  다음*/}
        {/*</button>*/}
        <button
          className={Style.paging_btn}
          onClick={() => {
            setPageNumber(1);
          }}
          title={"첫 페이지로 이동"}
        >
          <BiFirstPage role={"img"} aria-label={"첫 페이지 이동 아이콘"} />
        </button>
        <button
          className={Style.paging_btn}
          onClick={() => {
            if (pageNumber !== 1) {
              setPageNumber((old) => old - 1);
            }
          }}
          title={"이전 페이지로 이동"}
        >
          <BiChevronLeft role={"img"} aria-label={"이전 페이지 이동 아이콘"} />
        </button>
        <span className={Style.paging_info}>
          {pageNumber} / {numPages}
        </span>
        <button
          className={Style.paging_btn}
          onClick={() => {
            if (pageNumber !== numPages) {
              setPageNumber((old) => old + 1);
            }
          }}
          title={"다음 페이지로 이동"}
        >
          <BiChevronRight role={"img"} aria-label={"다음 페이지 이동 아이콘"} />
        </button>
        <button
          className={Style.paging_btn}
          onClick={() => {
            setPageNumber(numPages);
          }}
          title={"마지막 페이지로 이동"}
        >
          <BiLastPage role={"img"} aria-label={"마지막 페이지 이동 아이콘"} />
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
