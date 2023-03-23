import { useState } from 'react';
import { useContext } from "react";

// import { AuthContext } from "../../contexts/AuthContext";
// import { authService } from '../../services/authService';

import styles from '../Form/Forms.module.css';

import imgCard from "../../assets/card1-login.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import Form from '../Form/Form';
// import AuthProvider from '../AuthProvider/AuthProvider';


export default function Login() {
 
    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmitHandler = async (formData) => {
        console.log('formData', formData);
        try {
            // const user = await authService.login(formData);
            // setAuth(user)
            console.log("auth", user);
        } catch (error) {
            console.log("error: " + error);
        }
    };


    return (
        <div className={styles["container"]}>
            <div className={`${styles['container-form']} ${styles.login}`} >
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Login</h2>
                    <Form submit={onSubmitHandler} initialValues={initialValues} id={"login"} method="POST" >
                        <InputField label="Email" name="email" type="text" />
                        <InputField label="Password" name="password" type="password" />
                    </Form>
                </div>

            </div>
        </div>
    );
}
