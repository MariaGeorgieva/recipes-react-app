import { Link } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from "../../hooks/useForm";

import styles from '../formElements/Forms.module.css';
import { Logo } from '../Logo/Logo';
import imgCard from "../../assets/card1-login.jpg"
import InputField from '../InputField/InputField';
import { ButtonPrimary } from "../Buttons/Buttons";


export default function Login() {
    const { onLoginSubmit } = useAuthContext();

    const validate = (values) => {
        const errors = {};
        const touched = {};

        if (!values.username) {
            errors.username = "Username is required";
        } else if ((values.username.length < 5) || (touched.username)) {
            errors.username = "Username must be at least 5 characters long";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6 || (touched.password)) {
            errors.password = "Password must be at least 6 characters long";
        }

        return errors;
    };
    const { values, errors, touched, onChangeHandler, onSubmit, } = useForm({
        password: '',
        username: ''
    }, onLoginSubmit, validate);

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
                            label="Username"
                            name="username"
                            type="username"
                            value={values.username}
                            onChangeHandler={onChangeHandler}
                            error={errors.username}
                            touched={touched.username}
                            minInputLength='5'
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
