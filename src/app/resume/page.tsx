"use client";

import styles from "./page.module.css";
import { Document, Page, pdfjs } from "react-pdf";

// react-pdf layers
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function ResumePage() {

  return (
    <div id={styles.resumeContainer}>
      <Document className={styles.document} file="/resume-no-cell.pdf">
        <Page className={styles.page} pageNumber={1} width={document.getElementById("main")?.clientWidth ?? document.getElementById("main")?.scrollWidth}/>
      </Document>
    </div>
  )
}