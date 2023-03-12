import { Link } from 'react-router-dom'

import styles from './Logo.module.css'
import logo from '../cake-logo.svg';

export default function Logo() {

    return (
        <Link to={'/'}>
            <div className={styles["container-logo"]}>
                <img src={logo} alt="logo" className={styles["logo-img"]} />
                <h3 className={styles["logo-text"]}>Sweets<br />Lovers</h3>
            </div>
        </Link>
    );
}


