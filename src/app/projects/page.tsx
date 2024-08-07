import { FiExternalLink } from "react-icons/fi"
import styles from "./page.module.css"

export default function Page() {
  const projects = [
    {
      title: "apinis.org",
      url: "https://github.com/mapinis/mapinis.github.io",
      desc: "This very website, open source and hosted on GitHub Pages. See repository for not just source but also actions-based linting, building, and deployment.",
      tools: [
        "NextJS", "ReactJS", "NodeJS", "TypeScript", "GitHub Actions", "CI/CD", "CloudFlare DNS"
      ],
    },
    {
      title: "Project2",
      url: "NONE",
      desc: "DESCRIPTION",
      tools: [
        "Tool1", "Tool2"
      ]
    }
  ]

  return (
    <div id={styles.content}>
      {projects.map(({title, url, desc, tools}) => (
        <div key={title} className={styles.project}>
          <p><a className={styles.title} href={url} target="_blank">{title} <FiExternalLink className={styles.icons} size={22}/></a></p>
          <p className={styles.desc}>{desc}</p>
          <p className={styles.tools}>{tools.join(", ")}</p>
        </div>
      ))}
    </div>
  )
}