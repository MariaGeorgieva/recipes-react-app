import styles from '../Header/Header.module.css'
import logo from '../../logo.svg'
import eggs from '../../assets/eggs.svg'
import { MdSearch } from "react-icons/md";

export default function BoottomNav() {

    return (
        <nav className={styles["bottom-nav"]}>
            <a href="/"><img src={logo} className={styles['logo']} alt="Recipes app logo" /></a>

            <ul className={styles["bottom-links"]} >
                <li className={styles["bottom"]}><a className={styles["bottom-href"]} href="/">All Recipes</a></li>
                <li className={styles["bottom"]}><a className={styles["bottom-href"]} href="/">Category</a></li>
                {/* TODO Hidden logged in user*/}
                <li className={styles["bottom"]}><a className={styles["bottom-href"]} href="/">Create Recipe</a></li>
            </ul>

            <div className={styles["searchBox"]}>
                <input className={styles["searchInput"]} type="text" name="search" placeholder="Search" />
                <button className={styles["searchButton"]} type="submit">
                    <MdSearch> search</MdSearch>
                </button>
            </div>
            {/* <input className={styles['search']} type="text" placeholder="Search.." /> */}

            {/*Category Recipe Drop Down  */}
            <ul className={styles["category-links"]}>
                {/* TODO htmlFor loop all categories */}
                {/* TODO test svg icon*/}
                {/* <li className="link category"><img className='img-category' src={eggs} alt="" />Alaminutes</li> */}
                <li className={styles["link-category"]}>

                    <img className={styles['img-category']} src={eggs} alt="logo" /><a href="">Alaminutes</a></li>
                <li className={styles["link-category"]}><img src={eggs} alt="" />{'logo name'}</li>

            </ul>
        </nav>
    );
}