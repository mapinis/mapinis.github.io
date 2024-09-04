import { FiExternalLink } from "react-icons/fi"
import { ImAttachment } from "react-icons/im";

import styles from "./page.module.css"

export default function Page() {
  const projects = [
    {
      title: "apinis.org",
      url: "https://github.com/mapinis/mapinis.github.io",
      icon: <FiExternalLink size={22} />,
      desc: "This very website, open source and hosted on GitHub Pages. See repository for not just source but also actions-based linting, building, and deployment.",
      tools: [
        "Next.js", "React", "Node.js", "TypeScript", "GitHub Actions and Branching", "Cloudflare DNS"
      ],
    },
    {
      title: "Voter Propensity Classification",
      url: "/documents/voting-project.pdf",
      icon: <ImAttachment size={20} />,
      desc: "Final project for DA5030 Introduction to Data Mining / Machine Learning. Built multiple models (including an ensemble) and predicted if someone voted or not in the 2022 midterms from demographic features such as age, gender, education, and more. Data sourced from the United States Census Bureau.",
      tools: [
        "R", "RMarkdown", "Python 3", "Naive Bayes", "Logistic Regression", "Artificial Neural Networks"
      ]
    },
    {
      title: "bratify",
      url: "https://github.com/mapinis/bratify",
      icon: <FiExternalLink size={22} />,
      desc: "iMessage extension to generate fake \"brat\" album covers with any text and easily share it, allowing for a conversation using brat album covers. Features a dynamic preview and \"saves\" generated image to message input for immediate sharing. See linked repository for demonstration.",
      tools: [
        "Swift", "Messages framework", "UIKit", "Xcode"
      ]
    }
  ]

  return (
    <>
      <div id={styles.content}>
        {projects.map(({title, url, icon, desc, tools}) => (
          <div key={title} className={styles.project}>
            <p><a className={styles.title} href={url} target="_blank">{title} {icon}</a></p>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.tools}>{tools.join(", ")}</p>
          </div>
        ))}
      </div>
      <div id={styles.finalMessage}>...and more to come!</div>
    </>
  )
}