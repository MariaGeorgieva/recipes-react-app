import styles from '../Footer/Footer.module.css'
import { LogoWhite } from '../Logo/Logo';
export default function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles["copyright"]}>
                <div className={styles.logo}>
                    <LogoWhite />
                    <a href="mailto:m.georgieva17@icloud.com"> <span>Designed and Built by <strong>@mlove</strong> </span>  </a>
                </div>

                <p>Sweets Lovers - React SPA App © 2023. &copy; All Right reserved!</p>
            </div>
        </footer >
    );
}
