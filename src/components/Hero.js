// import heroImg from '../assets/ana-azevedo.jpg';
import heroImg from '../assets/ana-azevedo.jpg';
import {ButtonPrimary} from './Buttons';
import styles from './Hero.module.css';
import Logo from './Logo';

export default function Hero({ username }) {

    return (
        <header className={styles["container"]}>

            <nav className={styles["container-nav"]}>
                <Logo />
                <ul className={styles["top-links"]}>
                    <li className={styles["top"]}><a className={styles["top-href"]} href="/">Login</a></li>
                    <li className={styles["top"]}><a className={styles["top-href"]} href="/">Register</a></li>

                    {/* TODO Hidden logged in user */}
                    <li
                        className={styles["top"]}
                    // onMouseOver={handleMouseOver}
                    >
                        Hello, {username}
                    </li>
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
            </nav>

            <div className={styles["header-hero"]}>
                <img src={heroImg} className={styles["hero-img"]} alt="hero" />
                <section className={styles["container-content"]}>
                    <h4 className={styles["hero-subs"]}>You are what you eat, so eat dessert</h4>
                    <h2 className={styles["hero-title"]}>The secret ingredient is — and will always be — love</h2>
                    <ButtonPrimary value={'Recipes'} />
                </section>
    
            </div>



        </header>

    )
}