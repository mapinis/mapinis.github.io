/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { readdirSync } from "fs";

export default function Page() {
  return (
    <>
      <div id={styles.content}>
        <div id={styles.photoFrame}>
          <img src="headShot.jpeg" alt="Mark Apinis head shot" />
          <div id={styles.contact}>
            <p><b>Contact Me:</b></p>
            <p><a href="mailto:mark@apinis.org">mark@apinis.org</a></p>
            <span id={styles.socials}><a href="https://github.com/mapinis">Github</a> · <a href="https://www.linkedin.com/in/mapinis/">LinkedIn</a></span>
          </div>
        </div>
        <div id={styles.text}>
          <h2>About Me</h2>
          <p>Hi! I&apos;m Mark Apinis, and welcome!</p>
          <p>I am passionate about everything involving software, data, programming, genetics, and fighting disease, and especially the intersection of it all with computational science and bioinformatics. I hold two degrees from Northeastern University: B.S. in computer science and biology (2023) and M.S. in bioinformatics (2024).</p>
          <p>Today, I&apos;m a Bioinformatics Engineer at Dana-Farber Cancer Institute in Boston, working to conquer cancer with the incredible scientists and engineers of the Division of Population Sciences. Previously, I&apos;ve worked at Intuit, Novartis, Moderna, and as a computer science TA.</p>
          <p>In my spare time, I like to lift, swim, do anything outside (especially hiking and camping), play tennis, take photos, scuba dive, and explore. I&apos;m a huge advocate for walkable and transit-oriented development, and I love to bike or take the train to do everything from traveling to running errands.</p>
          <div id={styles.bulletLists}>
            <div className={styles.bullets}>
              <h3>Some Things I&apos;m Good At</h3>
              <ul>
                <li>Programming efficiently and smartly in all sorts of languages</li>
                <li>Modern software development stacks</li>
                <li>Math and statistics</li>
                <li>Breaking complex topics down into teachable chunks</li>
                <li>Understanding genetics and cellular processes</li>
                <li>Cooking</li>
              </ul>
            </div>
            <div className={styles.bullets}>
              <h3>Some Things I&apos;m Getting Better At</h3>
              <ul>
                <li>Everything I&apos;m good at, plus</li>
                <li>Servers and networking</li>
                <li>Machine learning and AI, especially for biological modeling</li>
                <li>Wider and deeper biology</li>
                <li>Recreational reading</li>
                <li>Disc golf</li>
                <li>Photography</li>
              </ul>
            </div>
            <div className={styles.bullets}>
              <h3>Some Albums I Recommend</h3>
              <ul>
                <li>Driveways - October Forever</li>
                <li>Charli xcx - BRAT</li>
                <li>Bleachers - Strange Desire</li>
                <li>A Story Told - Good Looks</li>
                <li>clipping. - There Existed an Addiction to Blood</li>
                <li>FLETCHER - In Search of the Antidote</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.collage}>
        {readdirSync("public/collage").filter(file => file.endsWith("jpeg")).map(file => (
          <img key={file} src={"collage/" + file} alt="Photo of Mark with Friends/Family" />
        ))}
      </div>
    </>
  );
}
