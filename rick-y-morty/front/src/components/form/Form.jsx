import { useState } from "react";
import validation from "./validation.js";
import styles from './form.module.css'


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '' 
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '' 
    })


    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1>Rick and Morty App</h1>
            <label htmlFor="username" className={styles.label} >Username:</label>
            <input type="text" name="username" className={styles.input1} value={userData.username} onChange={handleInputChange}/>
            {errors.username && <p className={styles.error} >{errors.username}</p>}

            <label htmlFor="password"  className={styles.label} >Password:</label>
            <input type="password" name="password" className={styles.input2} value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p className={styles.error} >{errors.password}</p>}

            <button className={styles.button} >➜</button>
        </form>
        </div>
    )
}

export default Form;