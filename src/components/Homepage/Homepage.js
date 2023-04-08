import Categories from '../Categories/Categories';
import styles from './Homepage.module.css';
import Hero from '../Header/Hero';
import CategoryList from '../CategoryList/CategoryList';

export default function Homepage() {
    // TODO Categories like tab
    return (
        <header className={styles["container"]}>
            <Hero />
            {/* <Categories /> */}
            <CategoryList />

        </header>
    )
}