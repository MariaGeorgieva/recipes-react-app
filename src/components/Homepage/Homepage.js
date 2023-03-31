import Categories from '../Categories/Categories';
import styles from './Homepage.module.css';
import Hero from '../Header/Hero';

export default function Homepage() {

    return (
        <header className={styles["container"]}>
            <Hero/>
            <Categories />
        </header>
    )
}