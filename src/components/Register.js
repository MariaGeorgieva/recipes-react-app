import styles from './Forms.module.css';
import { ButtonPrimary } from './Buttons'
import imgCard from "../assets/card2-register.jpg"
import { Logo } from './Logo';
import InputField from './InputField';


export default function Register() {

    const onSubmitHandler = (e) => {
        // TODO
        e.preventDefault();
        console.log("Click Register");
    }

    return (
        <div className={styles["container"]}>

            <div className={styles["container-form"]}>
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Create Account</h2>
                    {/* <form action="/register" method='POST'> */}
                    <form action="/" className={styles["form"]} >
                        <InputField label="Username" />
                        <InputField label="Email" />
                        <InputField label="Password" type={'password'} />
                        <InputField label="Repeat Password" type={'password'} />
                        <ButtonPrimary value={'Register'} clickHandler={(e) => onSubmitHandler(e)} />
                    </form>
                </div>

            </div>
        </div>
    );
}