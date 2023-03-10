import styles from './Logo.module.css'
import logo from '../cake-logo.svg';

export default function Logo(){

    return (
        <div className={styles["container-logo"]}>
            <img src={logo} alt="logo" className={styles["logo-img"]} />
            <h3 className={styles["logo-text"]}>Dessert<br />Lover's</h3>
        </div>
    );
}