import { NavLink } from 'react-router-dom'
import styles from './Header.module.css';
import Logo from './Logo';


export default function Navigation({
    username
}) {

    return (
        <nav className={styles["container-nav"]}>
            <Logo />
            <ul className={styles["top-links"]}>
                <li className={styles["top"]}><NavLink to="/login" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Login</NavLink></li>
                <li className={styles["top"]}><NavLink to="/register" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Register</NavLink></li>

                {/* TODO Hidden logged in user */}
                {username &&
                    <li className={styles["top"]}>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Hello {username}</NavLink>
                    </li>
                }
            </ul>

            {/* TODO Hidden logged in user */}
            {/* Drop Down */}

            {/* <ul
                    className={styles["profile-links"]}
                    // onMouseOut={handleMouseOut}
                    // onMouseOver={handleMouseOver}
                    >

                    <li className={styles["profile"]}>
                        <a className={styles["profile-href"]} href="/">Profile</a>
                    </li>
                    <li className={styles["profile"]}>
                        <a className={styles["profile-href"]} href="/">My Recipes</a>
                    </li>
                    <li className={styles["profile"]}>
                        <a className={styles["profile-href"]} href="/">Add Recipe</a>
                    </li>
                    <li className={styles["profile"]}>
                        <a className={styles["profile-href"]} href="/">Favourite Recipes</a>
                    </li>
                    <li className={styles["profile"]}>
                        <a className={styles["profile-href"]} href="/">Logout</a>
                    </li>
                </ul> */}
        </nav >

    );

}