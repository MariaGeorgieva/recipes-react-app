import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import styles from '../Header/Header.module.css';
import { Logo } from '../Logo/Logo';

export default function Navigation() {
    const { isAuthenticated, username } = useAuthContext();

    return (
        <nav className={styles["container-nav"]}>
            <Logo />
            <ul className={styles["top-links"]}>
                <li className={styles["top"]}>
                    <NavLink to="/recipes"
                        className={styles["top-href"]}>
                        All recipes
                    </NavLink>
                </li>

                <li className={styles["top"]}>
                    <NavLink to="/categories"
                        className={styles["top-href"]}>
                        Categories
                    </NavLink>
                </li>

            </ul>
            <ul className={styles["top-links"]}>
                {isAuthenticated ?
                    <>
                        <li className={styles["top"]}>
                            <NavLink to="/profile" className={styles["top-href"]}>Hello {username}</NavLink>
                        </li>
                        <li className={styles["top"]}>
                            <NavLink to="/recipes/create" className={styles["top-href"]}>Add recipe</NavLink>
                        </li>
                        <li className={styles["top"]}>
                            <NavLink to="/logout" className={styles["top-href"]}>Logout</NavLink>
                        </li>
                        
                    </> :
                    <>
                        <li className={styles["top"]}><NavLink to="/login" className={styles["top-href"]}>Login</NavLink></li>
                        <li className={styles["top"]}><NavLink to="/register" className={styles["top-href"]}>Register</NavLink></li>
                    </>
                }
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