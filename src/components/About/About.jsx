import React from "react";
import styles from "./About.module.css";
import Leo from "../../assets/RickMe.png";

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>Hi, I'm Leo</h1>
      <figure className={styles.portal}>
        <img src={Leo} alt="Leo" />
      </figure>
      <article className={styles.text}>
        <p>
          I'm a full stack web developer. I love to code and create beautiful
          web applications
        </p>
        <p>
          I'm currently learning React.js and Node.js in SoyHenry's bootcamp
        </p>
        <p>
          This application was made with educative purposes, it's build in ReactJs
          and NodeJs
        </p>
      </article>
    </section>
  );
};

export { About };
