import { useNavigate } from 'react-router-dom';


import { authServiceFactory } from '../../services/authService';

import styles from '../FormProvider/Forms.module.css';
import imgCard from "../../assets/card1-login.jpg"
import { Logo } from '../Logo/Logo';

import InputField from '../InputField/InputField';
import FormProvider from '../FormProvider/FormProvider';
// import { AuthContext } from '../../context/AuthContext';
import { useAuthContext } from '../../context/AuthContext';


export default function Login() {
    const { userLogin } = useAuthContext();
    const authService = authServiceFactory()
    const navigate = useNavigate();

    const initialValuesForm = {
        username: '',
        // email: '',
        password: '',
    };

    const onSubmitHandler = async (formData) => {
        try {
            const user = await authService.login(formData);
            userLogin(user);
            navigate("/");

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
                    <FormProvider submit={onSubmitHandler} initialValues={initialValuesForm} id={"login"} method="POST" >
                        <InputField label="Username" name="username" type="text" />
                        {/* <InputField label="Email" name="email" type="text" /> */}
                        <InputField label="Password" name="password" type="password" />
                    </FormProvider>
                </div>
            </div>
        </div>
    );
}
