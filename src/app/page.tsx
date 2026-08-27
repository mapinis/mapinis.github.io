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
          <p>I am passionate about everything involving programming, data, artificial intelligence, scientific discovery, and fighting disease. Today, I am a Full Stack AI Solutions Engineer at Pfizer in Cambridge, MA, working in medicine design and leveraging LLMs and agents to accelerate chemical and medicinal discovery.</p>
          <p>Previously, I was a bioinformatics engineer at Dana-Farber Cancer Institute, and a co-op at Intuit, Novartis, and Moderna. I hold two degrees from Northeastern University: B.S. in computer science and biology (2023) and M.S. in bioinformatics (2024), and during most semesters I was a computer science TA. I like to imagine that one of my last jobs will be teaching.</p>
          <p>In my spare time, I like to lift, do anything outside (especially hiking, camping, and disc golf), play tennis, take photos, scuba dive, read, watch baseball, and explore. I&apos;m a huge advocate for public transit, zoning reform, and green+nuclear energy, and I love to bike or take the train for everything from traveling to running errands.</p>
          <div id={styles.bulletLists}>
            <div className={styles.bullets}>
              <h3>Some Things I&apos;m Good At</h3>
              <ul>
                <li>Programming efficiently and smartly in all sorts of languages</li>
                <li>Modern software development stacks</li>
                <li>Agentic design and engineering</li>
                <li>Breaking complex topics down into teachable chunks</li>
                <li>Jumping into a complex problem and learning by doing</li>
                <li>Cooking</li>
              </ul>
            </div>
            <div className={styles.bullets}>
              <h3>Some Things I&apos;m Getting Better At</h3>
              <ul>
                <li>Everything I&apos;m good at, plus</li>
                <li>Servers and networking</li>
                <li>Machine learning, especially in biology</li>
                <li>Recreational reading</li>
                <li>Disc golf</li>
                <li>Photography</li>
              </ul>
            </div>
            <div className={styles.bullets}>
              <h3>Some Albums I Liked Listening To:</h3>
              <ul>
                <li><i>October Forever</i> by Driveways</li>
                <li><i>There&apos;s A Whole World Out There</i> by Arm&apos;s Length</li>
                <li><i>Detour</i> by Kim Petras</li>
                <li><i>Strange Desire</i> by Bleachers</li>
                <li><i>Good Looks</i> by A Story Told</li>
                <li><i>There Existed an Addiction to Blood</i> by clipping.</li>
              </ul>
            </div>
            <div className={styles.bullets}>
              <h3>Some Books I Liked Reading:</h3>
              <ul>
                <li><i>East West Street</i> by Philippe Sands</li>
                <li><i>The Power Broker</i> by Robert Caro</li>
                <li><i>Challenger</i> by Adam Higginbotham</li>
                <li><i>Abundance</i> by Ezra Klein and Derek Thompson</li>
                <li><i>The Three-Body Problem</i> by Cixin Liu, translated by Ken Liu</li>
                <li><i>Paved Paradise</i> by Henry Grabar</li>
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
