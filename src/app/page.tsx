import styles from "./page.module.css";

export default function Page() {
  return (
    <div id={styles.content}>
      <div id={styles.photoFrame}>
        <img src="headshot.jpeg" alt="Mark Apinis headshot" />
        <div>
          <p><b>Contact Me:</b></p>
          <p><a href="mailto:mark@apinis.org">mark@apinis.org</a></p>
        </div>
      </div>
      <div id={styles.text}>
        <h2>About Me</h2>
      </div>
    </div>
  );
}
