import Categories from '../Categories/Categories';
import styles from './Homepage.module.css';
import RecipeList from '../RecipeList/RecipeList';
import Hero from '../Header/Hero';

export default function Homepage() {

    return (
        <header className={styles["container"]}>
            <Hero/>
            <Categories />
            <RecipeList />
        </header>
    )
}