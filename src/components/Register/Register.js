import { useNavigate } from 'react-router-dom';
import { authServiceFactory } from '../../services/authService';
import { useAuthContext } from '../../context/AuthContext';

import styles from '../FormProvider/Forms.module.css';
import imgCard from "../../assets/card2-register.jpg"
import { Logo } from '../Logo/Logo';
import InputField from '../InputField/InputField';
import Form from '../FormProvider/FormProvider';




export default function Register() {
    const { userRegister,  token } = useAuthContext();
    const authService = authServiceFactory(token);
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        repass: '',
    };

    const onSubmitHandler = async (formData) => {

        try {
            
            if (formData.password !== formData.repass) {
                return; //TODO user error
            }
            const user = await authService.register(formData);
            console.log('responce', user);
            userRegister(user);
            navigate('/')
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
                        <InputField label="Username" name="username" type="text" />
                        <InputField label="Email" name="email" type="email" />
                        <InputField label="Password" type="password" name="password" />
                        <InputField label="Repeat Password" type="password" name="repass" />
                    </Form>
                </div>

            </div>
        </div>
    );
}