import React from "react";
import styles from "./About.module.css";
import Leo from "../../assets/RickMe.png";

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        Hi<span>,</span> I<span>'</span>m <span>Leo</span>
      </h1>
      <figure className={styles.portal}>
        <img src={Leo} alt="Leo" />
      </figure>
      <article className={styles.text}>
        <p>
          I am a full stack web developer, and I thoroughly enjoy coding and
          creating stunning web applications.
        </p>
        <p>
          Currently, I am expanding my knowledge in React.js and Node.js through
          <span> SoyHenry's</span> bootcamp.
        </p>
        <p>
          This application has been developed for educational purposes. It is
          built using React.js and Node.js.
        </p>
      </article>
    </section>
  );
};

export { About };
