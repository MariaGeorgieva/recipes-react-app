import { Link } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from "../../hooks/useForm";

import styles from '../FormProvider/Forms.module.css';
import { Logo } from '../Logo/Logo';
import imgCard from "../../assets/card1-login.jpg"
import InputField from '../InputField/InputField';
import { ButtonPrimary } from "../Buttons/Buttons";


export default function Login() {
    const { onLoginSubmit } = useAuthContext();

    const { values, onChangeHandler, onSubmit } = useForm({
        // email: '',
        password: '',
        username:''
    }, onLoginSubmit);

    return (
        <div className={styles["container"]}>
            <div className={`${styles['container-form']} ${styles.login}`} >
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Login</h2>

                    <form onSubmit={onSubmit} id="login" method="POST">
                        <InputField
                            id="username"
                            label="username"
                            name="username"
                            type="username"
                            value={values.username}
                            onChangeHandler={onChangeHandler}
                        />
                        {/* <InputField
                            id="email"
                            label="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChangeHandler={onChangeHandler}
                        /> */}
                        <InputField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChangeHandler={onChangeHandler}
                        />
                        <ButtonPrimary type="submit" value={'Login'} />
                    </form>

                    <p className={styles["field"]}>
                        <span>If you don't have an account click <Link to="/register" className={styles["fieldLink"]}>here</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
}
