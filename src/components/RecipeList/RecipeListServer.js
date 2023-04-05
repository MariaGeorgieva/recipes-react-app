
import styles from './RecipeList.module.css'
import RecipeCard from '../RecipeCard/RecipeCard';
import { useRecipeContext } from '../../context/RecipeContext';

export default function RecipeListServer() {
    const { recipes } = useRecipeContext()

    return (
        <>
            <h2 className={styles["title-categories"]}>Server recipes</h2>
            <div className={styles["container-articles"]}>
                {recipes
                    .map(r =>
                        <RecipeCard
                            key={r._id}
                            {...r}
                        />)}
            </div>

        </>
    );
}