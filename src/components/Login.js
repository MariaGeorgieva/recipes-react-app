import styles from './Forms.module.css';
import { ButtonPrimary } from './Buttons'
import imgCard from "../assets/card1-login.jpg"
import {Logo} from './Logo';
import InputField from './InputField';


export default function Login() {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // TODO
        console.log("Click Login");
    }

    return (
        <div className={styles["container"]}>

            {/* <div id={"login"} className={styles["container-form"]}> */}
            <div id={"login"} className={`${styles['container-form']} ${styles.login}`} >
                <img className={styles["img"]} src={imgCard} alt="Cake Lovers" />
                <div className={styles["container-form-column"]}>
                    <Logo />
                    <h2 className={styles["title"]}>Login</h2>
                    {/* <form action="/register" method='POST'> */}
                    <form action="/" className={styles["form"]} >

                        {/* <TextInput label="Username" /> */}
                        <InputField label="Email" />
                        <InputField label="Password" type={'password'} />
                        {/* <TextInput label="Repeat Password" type={'password'} /> */}
                        <ButtonPrimary value={'Login'} clickHandler={(e) => onSubmitHandler(e)} />
                    </form>
                </div>

            </div>
        </div>
    );
}