import { useEffect, useState } from 'react';
import * as recipeServiceAPI from '../../services/recipeServiceAPI';
import { useRecipeContext } from '../../contexts/RecipeContext';

import styles from './RecipeList.module.css'
import RecipeCard from '../RecipeCard/RecipeCard';
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";


export default function RecipeList({
    catName = 'Dessert',
}) {
    const [spoonacularApiRecipes, setSpoonacularApiRecipes] = useState([]);
    const { recipes } = useRecipeContext()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        recipeServiceAPI.getRecipeCategoryAPI(catName, 8)
            .then(spoonacularTest => {
                setSpoonacularApiRecipes(spoonacularTest);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("Error API" + err);
            });

    }, [catName]); //empty array!


    return (
        <>
            <h2 className={styles["title-categories"]}>Server recipes</h2>
            <div className={styles["container-articles"]}>
                {recipes && recipes
                    .map(r =>
                        <RecipeCard
                            key={r._id}
                            {...r}
                        />)}
            </div>
            <h2 className={styles["title-categories"]}>Spoonacular <strong>{catName}</strong> recipes</h2>
            {isLoading ? <LoadingSpinner /> :
                <div className={styles["container-articles"]}>
                    {spoonacularApiRecipes
                        .map(r =>
                            <RecipeCard
                                key={r.id}
                                {...r}
                            />)}
                </div>
            }
        </>
    );
}