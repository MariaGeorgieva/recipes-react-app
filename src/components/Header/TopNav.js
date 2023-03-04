import { useState } from 'react';

import styles from './Header.module.css'

export default function TopNav({ username }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (

        <nav className={styles["top-nav"]} >

            <ul className={styles["top-links"]}>
                <li className={styles["top"]}><a className={styles["top-href"]} href="/">Login</a></li>
                <li className={styles["top"]}><a className={styles["top-href"]} href="/">Register</a></li>

                {/* TODO Hidden logged in user */}
                <li
                    className={styles["top"]}
                    onMouseOver={handleMouseOver}
                >
                    Hello, {username}
                </li>
            </ul>

            {/* TODO Hidden logged in user */}
            {/* Drop Down */}
            {isHovering &&
                <ul
                    className={styles["profile-links"]}
                    onMouseOut={handleMouseOut}
                    onMouseOver={handleMouseOver}>

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
                </ul>
            }
        </nav >

    );

}