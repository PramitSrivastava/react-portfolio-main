import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pramit Srivastava</h1>
        <p className={styles.description}>
          👋 Hi! I'm a passionate full-stack developer with 3+ years of experience crafting responsive and dynamic applications using React.js and the MERN stack.
        </p>
        <a
          href="https://drive.google.com/file/d/1qLMI6ooVrcNfrHyd0GvxgjBkcaW_cZYM/view"
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.hero}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
