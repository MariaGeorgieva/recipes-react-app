import { NavLink } from 'react-router-dom'
import styles from '../Header/Header.module.css';
import { Logo } from '../Logo/Logo';

export default function Navigation({
    username = "maria"
}) {

    return (
        <nav className={styles["container-nav"]}>
            <Logo />
            <ul className={styles["top-links"]}>
                <li className={styles["top"]}>
                    <NavLink to="/recipes"
                        className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>
                        All recipes
                    </NavLink>
                </li>

                <li className={styles["top"]}>
                    <NavLink to="/categories"
                        className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>
                        Categories
                    </NavLink>
                </li>

            </ul>
            <ul className={styles["top-links"]}>
                {username ?
                    <>
                        <li className={styles["top"]}>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Hello {username}</NavLink>
                        </li>
                        <li className={styles["top"]}>
                            <NavLink to="/recipes/create" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Add recipe</NavLink>
                        </li>
                    </> :
                    <>
                        <li className={styles["top"]}><NavLink to="/login" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Login</NavLink></li>
                        <li className={styles["top"]}><NavLink to="/register" className={({ isActive }) => isActive ? styles["top-href-active"] : styles["top-href"]}>Register</NavLink></li>
                    </>}
            </ul>

            {/* TODO Hidden logged in user */}
            {/* Drop Down */}

            {/* <ul className={styles["profile-links"]}>
                <li className={styles["profile"]}> */}

            {/* <a className={styles["profile-href"]} href="/">Profile</a> */}
            {/* </li>
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
                </li> */}
            {/* </li>
            </ul> */}
        </nav >

    );

}