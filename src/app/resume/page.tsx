import styles from "./page.module.css";

export default function Page() {

  return (
    <div id={styles.resume}>
      <object data="/documents/resume-no-cell.pdf#view=FitV&toolbar=0" type="application/pdf" width="100%" height="100%">
        <p>Click <a href="/documents/resume-no-cell.pdf" target="_blank">here</a> to open resumé PDF.</p>
      </object>
    </div>
  )
}