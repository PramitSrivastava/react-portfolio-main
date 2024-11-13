import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
  <h3>Frontend Developer</h3>
  <p>
    I’m a frontend developer with a passion for crafting responsive and optimized web experiences. With expertise in modern tools like React.js, Next.js, Tailwind CSS, Bootstrap, and Framer Motion, I create visually engaging and interactive interfaces. My approach combines performance optimization and design precision to deliver a seamless user experience across devices.
  </p>
</div>

          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Mern Stack Developer</h3>
              <p>
              With a strong foundation in the MERN stack, I specialize in creating high-performance, optimized back-end systems and RESTful APIs. Leveraging MongoDB, Express, React, and Node.js, I deliver scalable solutions that focus on efficiency and seamless integration. My experience allows me to build responsive and secure applications tailored to business needs.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
