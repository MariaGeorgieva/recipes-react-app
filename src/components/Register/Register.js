// import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from "../../hooks/useForm";

import styles from '../formElements/Forms.module.css';
import imgCard from "../../assets/card2-register.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import { ButtonPrimary } from "../Buttons/Buttons";



export default function Register() {
    const { onRegisterSubmit } = useAuthContext();


    const validate = (values) => {
        const errors = {};
        const touched = {};


        if (!values.username) {
            errors.username = "Username is required";
        } else if ((values.username.length < 5) || (touched.username)) {
            errors.username = "Username must be at least 5 characters long";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6 || (touched.password)) {
            errors.password = "Password must be at least 6 characters long";
        }

        if (values.password !== values.rePass) {
            errors.rePass = "Passwords do not match";
        }

        return errors;
    };

    const { values, errors, touched, onChangeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        rePass: '',
    }, onRegisterSubmit, validate);


    return (
        <div className={styles["container"]}>

            <div className={styles["container-form"]}>
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Create an Account</h2>

                    <form onSubmit={onSubmit} id="register" method="POST">
                        
                        <InputField
                            id="username"
                            label="Username"
                            name="username"
                            type="text"
                            value={values.username}
                            onChangeHandler={onChangeHandler}
                            error={errors.username}
                            touched={touched.username}
                            minInputLength='5'
                        />

                        <InputField
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChangeHandler={onChangeHandler}
                            error={errors.email}
                            touched={touched.email}
                        />

                        <InputField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChangeHandler={onChangeHandler}
                            error={errors.password}
                            touched={touched.password}
                            minInputLength='6'
                        />

                        <InputField
                            id="rePass"
                            label="Repeat Password"
                            name="rePass"
                            type="password"
                            value={values.rePass}
                            onChangeHandler={onChangeHandler}
                            error={errors.rePass}
                            touched={touched.rePass}
                            minInputLength='6'
                        />

                        <ButtonPrimary type="submit" value={'Register'} />

                    </form>

                    <p className={styles["field"]}>
                        <span>Have an account click <Link to="/login" className={styles["fieldLink"]}>here</Link></span>
                    </p>
                </div>

            </div>
        </div>
    );
}