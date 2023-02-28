import Head from "next/head";
import Card from "@/components/Card";
import styles from "./about.module.css";
const POSTS = [
  {
    icon: "work",
    title: "Bishop Fox",
    subTitle: "Software Engineer",
    duration: "2023 - Present",
    location: "Charlottesville, VA (Remote)",
    description: "Software Engineer for Bishop Fox, a cybersecurity company.",
  },
  {
    icon: "work",
    title: "TwinThread",
    subTitle: "Analytics Developer",
    duration: "Summer 2021 - 2023",
    location: "Charlottesville, VA",
    description:
      "Primary full stack developer on the analytics team at TwinThread: an industrial predictive maintenance software company. My work focuses on developing the web interface through which customers create and configure machine learning models, as well as constructing visualizations that give manufacturers insights into their industrial processes.",
  },
  {
    icon: "school",
    title: "University of Virginia",
    subTitle: "Master's in Data Science",
    duration: "2020 - 2021",
    location: "Charlottesville, VA",
    description: "GPA: 4.0",
  },
  {
    icon: "school",
    title: "University of Virginia",
    subTitle: "BA in Computer Science, Psychology Minor",
    duration: "2016 - 2020",
    location: "Charlottesville, VA",
    description:
      "Graduated from the University of Virginia in 2019, majoring in Computer Science and minoring in Psychology. During my time at UVA I was an Echol's Scholar and received Intermediate Honors in 2018. I graduated with Distinction and an overall GPA of 4.0.",
  },
  {
    icon: "certificate",
    title: "AWS Certified Developer",
    subTitle: "Associate",
    duration: "2021 - 2024",
  },
  {
    icon: "certificate",
    title: "Azure Certified Developer",
    subTitle: "Associate",
    duration: "2021 - 2023",
  },
  {
    icon: "work",
    title: "TwinThread",
    subTitle: "Software Engineer",
    duration: "Summer 2018, 2020",
    location: "Charlottesville, VA",
    description:
      "Software developer at TwinThread. Work focused on creating data visualizations coming from machine learning pipelines.",
  },
  {
    icon: "work",
    title: "AT&T",
    subTitle: "Software Engineer",
    duration: "Summer 2019",
    location: "Dallas, TX",
    description:
      "Software developer at AT&T. I developed a mobile app in React-Native called OurCalling that displays homelessness resources in one’s area. The app is currently available on both iOS and Android app stores.",
  },
  {
    icon: "work",
    title: "Forge (Formerly Hackville)",
    subTitle: "Program Lead",
    duration: "2018-2019",
    location: "Charlottesville, VA",
    description:
      "Program Lead and instructor for the Source and Mobile software development courses at Forge, a Charlottesville non-profit focused on teaching modern skills. Topics covered include React, React Native, JavaScript, relational and non-relational databases, creating backends, and api's.",
  },
] as const;

const SKILLS = [
  "AWS",
  "Azure",
  "JavaScript",
  "TypeScript",
  "React",
  "React-Native",
  "HTML",
  "CSS",
  "C#",
  "SQL Server",
  ".NET",
  "Python",
  "Git",
] as const;

export default function About() {
  return (
    <>
      <Head>
        <title>About | Taylor Rohrich</title>
        <meta name="description" content="Official website of Taylor Rohrich" />
      </Head>
      <div className={styles.container}>
        <p className={styles.header}>Work</p>
        <div>
          {POSTS.filter((p) => p.icon === "work").map((p) => (
            <Card key={p.title + "-" + p.duration} {...p} />
          ))}
        </div>
        <p className={styles.header}>Education</p>
        <div>
          {POSTS.filter((p) => p.icon === "school").map((p) => (
            <Card key={p.title + "-" + p.duration} {...p} />
          ))}
        </div>
        <p className={styles.header}>Certificates</p>
        <div>
          {POSTS.filter((p) => p.icon === "certificate").map((p) => (
            <Card key={p.title + "-" + p.duration} {...p} />
          ))}
        </div>
        <p className={styles.header}>Skills</p>
        <div className={styles.skillsContainer}>
          {SKILLS.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>
      </div>
    </>
  );
}
