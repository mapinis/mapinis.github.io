import styles from "./page.module.css";
import { readdirSync } from "fs";

export default function Page() {
  return (
    <>
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
        <p>Hi! I&apos;m Mark Apinis, and welcome! I&apos;m a recent graduate of Northeastern University, with both my B.S. in computer science and biology and my M.S. in bioinformatics as part of the PlusOne program.</p>
        <p>I am passionate about everything involving software, data, programming, genetics, and fighting disease, and especially the intersection of it all with computational science and bioinformatics. Previously, I&apos;ve worked at Intuit, Novartis, Moderna, and my college as a TA.</p>
        <p>In my spare time, I like to lift, do anything outside (especially backpacking), take photos, and explore. I&apos;m a huge advocate for walkable and transit-oriented development, and I love to bike or take the train to do everything from visiting somewhere new to just running errands.</p>
        <div id={styles.bulletLists}>
          <div className={styles.bullets}>
            <h3>Some Things I&apos;m Good At</h3>
            <ul>
              <li>Programming efficiently and smartly in all sorts of languages</li>
              <li>Modern software development stacks</li>
              <li>Math and statistics</li>
              <li>Quickly learning and then applying</li>
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
              <li>Wider and deeper biology (never ends)</li>
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
              <li>Judah & the Lion - The Process</li>
              <li>FLETCHER - In Search of the Antidote</li>
              <li>Waterparks - Double Dare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id={styles.collage}>
      {readdirSync("public/collage").map(file => (
        <img key={file} src={"collage/" + file} alt="Photo of Mark with Friends/Family" />
      ))}
    </div>
    </>
  );
}
