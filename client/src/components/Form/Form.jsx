import React from "react";
import styles from "./Form.module.css";
import { LogoRAM } from "../Logo/LogoRAM";
import { validation } from "./validation";

const Form = ({ login, wrongPass, setWrongPass }) => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const validate = validation(userData);
    setErrors(validate);

    const hasErrors = Object.keys(validate).length > 0;

    if (!hasErrors) {
      login(userData);
    }
  };

  return (
    <div className={styles.formContainer}>
      <section
        className={`${styles.formSection} ${wrongPass && styles.wrongPass}`}
        onAnimationEnd={() => {
          setWrongPass(false);
        }}
      >
        <LogoRAM />
        <form onSubmit={submitHandler} className={styles.form}>
          <label htmlFor="" className={styles.formLabel}>
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="ejemplo@test.com"
            className={`${styles.formInput} ${
              !userData.email
                ? ""
                : errors.email
                ? styles.failure
                : styles.success
            }`}
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.errMessage}>{errors.email}</p>}
          <label htmlFor="" className={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="•••••••••"
            className={`${styles.formInput} ${
              !userData.password
                ? ""
                : errors.password
                ? styles.failure
                : styles.success
            }`}
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className={styles.errMessage}>{errors.password}</p>
          )}
          <button className={styles.formButton}>Login</button>
          {wrongPass && (
            <p className={styles.errMessage}>User or Password incorrect</p>
          )}
        </form>
      </section>
    </div>
  );
};

export { Form };
