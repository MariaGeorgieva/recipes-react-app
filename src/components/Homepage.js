import Categories from './Categoties';
import styles from './Header.module.css';
import Hero from './Hero';
import RecipeList from './RecipeList';

export default function Homepage() {

    return (
        <header className={styles["container"]}>
            <Hero />
            <Categories />
            <RecipeList />
        </header>
    )
}