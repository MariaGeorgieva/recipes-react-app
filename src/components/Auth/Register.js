import styles from '../Auth/Forms.module.css';
import imgCard from "../../assets/card2-register.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import Form from './Form';


export default function Register() {
    const initialValues = {
        username:'',
        email: '',
        password: '',
        repass: '',
    };

    const onSubmitHandler = (form) => {
        console.log(form);
        // setMessage(`Thanks for signing up, ${form.email}! We've sent you an email to ${form.email}.`);
    };

    return (
        <div className={styles["container"]}>

            <div className={styles["container-form"]}>
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Create Account</h2>
                    
                    <Form submit={onSubmitHandler} initialValues={initialValues} className={styles["form"]}>
                        <InputField label="Username" name="username" type="text" />
                        <InputField label="Email" name="email" type="email" />
                        <InputField label="Password" type="password" name="password" />
                        <InputField label="Repeat Password" type="password" name="repass"/>
                    </Form>
                </div>

            </div>
        </div>
    );
}