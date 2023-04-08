import { useRecipeContext } from '../../contexts/RecipeContext';

import styles from './AllRecipesList.module.css'
import RecipeCard from '../RecipeCard/RecipeCard';


export default function AllRecipeList() {
    const { recipes } = useRecipeContext()
    
    return (
        <>
            <h2 className={styles["title-categories"]}>All Server recipes {recipes?.length}</h2>
            <div className={styles["container-articles"]}>
                {recipes && recipes
                    .map(r =>
                        <RecipeCard
                            key={r._id}
                            {...r}
                        />)}

            </div>
            
        </>
    );
}