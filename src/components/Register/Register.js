import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from "../../hooks/useForm";

import styles from '../FormProvider/Forms.module.css';
import imgCard from "../../assets/card2-register.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import { ButtonPrimary } from "../Buttons/Buttons";



export default function Register() {
    const { onRegisterSubmit } = useAuthContext();

    const { values, onChangeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        rePass: '',
    }, onRegisterSubmit);

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
                        />

                        <InputField
                            id="email"
                            label="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChangeHandler={onChangeHandler}
                        />

                        <InputField
                            id="rePass"
                            label="Repeat Password"
                            name="rePass"
                            type="password"
                            value={values.rePass}
                            onChangeHandler={onChangeHandler}
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