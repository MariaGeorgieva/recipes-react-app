import styles from './Homepage.module.css';
import Hero from '../Header/Hero';
import CategoryList from '../CategoryList/CategoryList';
import LastAddedRecipeList from './LastAddedRecipeList/LastAddedRecipeList';

export default function Homepage() {
    // TODO Categories like tab
    return (
        <header className={styles["container"]}>
            <Hero />
            <CategoryList />
            <LastAddedRecipeList />

        </header>
    )
}