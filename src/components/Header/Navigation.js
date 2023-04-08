import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import styles from '../Header/Header.module.css';
import { Logo } from '../Logo/Logo';

export default function Navigation() {
    const { isAuthenticated, username } = useAuthContext();

    return (
        <div className={styles["navigation-container"]}>

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
                                <NavLink to="/profile" className={styles["top-href"]}>Hello <span className={styles["top-href-span"]}>{username}</span></NavLink>
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
            </nav >
        </div>
    );

}