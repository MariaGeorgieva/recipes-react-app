import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import styles from './RecipeList.module.css'
import Recipe from '../Recipe/Recipe';
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";


export default function RecipeList() {
    const [spoonacularApiRecipes, spoonacularTestRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        recipeService.getRecipeCategory('cake', 8)
            .then(spoonacularTest => {
                spoonacularTestRecipes(spoonacularTest);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("Error" + err);
            });

    }, []); //empty array!


    return (
        <>
            <h2 className={styles["title-categories"]}>Last <span>Cake</span> recipes</h2>
            {isLoading ? <LoadingSpinner /> :
                <div className={styles["container-articles"]}>
                    {spoonacularApiRecipes
                        .map(r =>
                            <Recipe
                                key={r.id}
                                {...r}
                            />)}
                </div>
            }
        </>
    );
}