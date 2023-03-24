import styles from '../FormProvider/Forms.module.css';
import { authServiceFactory } from '../../services/authService';

import imgCard from "../../assets/card2-register.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import Form from '../FormProvider/FormProvider';
import { useAuthContext } from '../../context/AuthContext';


export default function Register() {
    const { userRegister, auth } = useAuthContext();
    const authService = authServiceFactory()

    const initialValues = {
        // username:'',
        email: '',
        password: '',
        // repass: '',
    };

    const onSubmitHandler = async (formData) => {
        console.log(formData);
        // setMessage(`Thanks for signing up, ${form.email}! We've sent you an email to ${form.email}.`);
        try {
            const responce = await authService.register(formData);
            console.log('responce', responce);
            userRegister(responce)
        } catch (error) {
            console.log("error: " + error);
        }
    };

    return (
        <div className={styles["container"]}>

            <div className={styles["container-form"]}>
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Create Account</h2>

                    <Form submit={onSubmitHandler} initialValues={initialValues} className={styles["form"]}>
                        {/* <InputField label="Username" name="username" type="text" /> */}
                        <InputField label="Email" name="email" type="email" />
                        <InputField label="Password" type="password" name="password" />
                        {/* <InputField label="Repeat Password" type="password" name="repass"/> */}
                    </Form>
                </div>

            </div>
        </div>
    );
}