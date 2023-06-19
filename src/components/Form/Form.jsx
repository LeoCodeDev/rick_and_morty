import React from "react";
import styles from "./Form.module.css";
import { LogoRAM } from "../Logo/LogoRAM";

const Form = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

  }

  const submitHandler = (e) => {};

  return (
    <div className={styles.formContainer}>
      <section className={styles.formSection}>
        <LogoRAM />
        <form onSubmit={submitHandler} className={styles.form}>
          <label htmlFor="" className={styles.formLabel}>
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="ejemplo@test.com"
            className={styles.formInput}
            value={userData.email}
            onChange={handleChange}
          />
          <label htmlFor="" className={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="•••••••••"
            className={styles.formInput}
            value={userData.password}
            onChange={handleChange}
          />
          <button className={styles.formButton}>Login</button>
        </form>
      </section>
    </div>
  );
};

export { Form };
