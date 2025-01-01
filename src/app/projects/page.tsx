import { FiExternalLink } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";

import styles from "./page.module.css";

const EXT_LINK_ICON = <FiExternalLink size={22} />;
const ATT_LINK_ICON = <ImAttachment size={20} />;

const PROJECTS = [
  {
    title: "apinis.org",
    url: "https://github.com/mapinis/mapinis.github.io",
    icon: EXT_LINK_ICON,
    desc: "This very website, open source and hosted on GitHub Pages. See repository for not just source but also actions-based linting, building, and deployment.",
    tools: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "GitHub Actions and Branching",
      "Cloudflare DNS",
    ],
  },
  {
    title: "Voter Propensity Classification",
    url: "/documents/voting-project.pdf",
    icon: ATT_LINK_ICON,
    desc: "Final project for DA5030 Introduction to Data Mining / Machine Learning. Built multiple models (including an ensemble) and predicted if someone voted or not in the 2022 midterms from demographic features such as age, gender, education, and more. Data sourced from the United States Census Bureau.",
    tools: [
      "R",
      "RMarkdown",
      "Python 3",
      "Naive Bayes",
      "Logistic Regression",
      "Artificial Neural Networks",
    ],
  },
  {
    title: "ConsensusLLM",
    url: "https://github.com/mapinis/ConsensusLLM",
    icon: EXT_LINK_ICON,
    desc: "Python script to facilitate a conversation between two opposing LLMs. Simulates an open debate on a user-provided topic that continues until both models agree that a consensus has been reached. Runs completely locally using ollama and pretty-prints tokens as they stream from the models.",
    tools: [
      "Python 3",
      "ollama",
    ],
  },
  {
    title: "bikeability",
    url: "https://apinis.org/bikeability",
    icon: EXT_LINK_ICON,
    desc: "English-language summaries of biking conditions in US cities or between two addresses. Backend using AWS tools, weather data from NWS, and summaries generated by ChatGPT 4o. Uses DynamoDB to cache city and route summaries for eight hours to save on API calls. Simple frontend built with React and using the Google Maps and Locations APIs.",
    tools: [
      "TypeScript",
      "AWS Lambda",
      "AWS DynamoDB",
      "OpenAI API",
      "NWS API",
      "Next.js",
      "React",
      "Node.js",
    ],
  },
  {
    title: "bratify",
    url: "https://github.com/mapinis/bratify",
    icon: EXT_LINK_ICON,
    desc: 'iMessage extension to generate fake "brat" album covers with any text and easily share it, allowing for a conversation using brat album covers. Features a dynamic preview and "saves" generated image to message input for immediate sharing. See linked repository for demonstration.',
    tools: ["Swift", "Messages framework", "UIKit", "Xcode"],
  },
];

export default function Page() {
  return (
    <>
      <div id={styles.content}>
        {PROJECTS.map(({ title, url, icon, desc, tools }) => (
          <div key={title} className={styles.project}>
            <p>
              <a className={styles.title} href={url} target="_blank">
                {title} {icon}
              </a>
            </p>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.tools}>{tools.join(", ")}</p>
          </div>
        ))}
      </div>
      <div id={styles.finalMessage}>...and more to come!</div>
    </>
  );
}
