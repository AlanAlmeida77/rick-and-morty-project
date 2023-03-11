import { useState, useEffect } from "react";
import validation from "./validation";
import styles from "./form.module.css";
import logo from "../../img/rick-and-morty.png"; // importa tu logo aquí

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      login(userData);
    }
  }, [errors, isSubmitting, userData, login]);

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(userData));
    setIsSubmitting(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p>{errors.username}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Form;