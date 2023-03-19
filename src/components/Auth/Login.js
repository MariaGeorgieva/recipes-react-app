import styles from '../Auth/Forms.module.css';
import imgCard from "../../assets/card1-login.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import Form from './Form';


export default function Login() {

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmitHandler = (form) => {
        console.log(form);
    };


    return (
        <div className={styles["container"]}>

            <div id={"login"} className={`${styles['container-form']} ${styles.login}`} >
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Login</h2>

                    <Form submit={onSubmitHandler} initialValues={initialValues}>
                        <InputField
                            label="Email"
                            name="email"
                            type="text"
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                        />
                    </Form>
                </div>

            </div>
        </div>
    );
}
