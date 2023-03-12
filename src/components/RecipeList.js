import { useEffect, useState } from 'react';
import * as recipeService from '../services/recipeService';
import styles from './RecipeList.module.css'
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';
import { Link, useParams } from 'react-router-dom';

export default function RecipeList() {
    const [spoonacularApiRecipes, spoonacularTestRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getRecipeCategory('cake', 8)
            .then(spoonacularTest => {
                spoonacularTestRecipes(spoonacularTest);
            })
            .catch(err => {
                console.log("Error" + err);
            });

    }, []); //empty array!

    const onClickDetails = async (id) => {
        const recipe = await recipeService.getRecipeById(id);
        setSelectedRecipe(recipe);
    }

    return (
        <>
                {/* TODO Recipe view */}
               
                <h2 className={styles["title-categories"]}>Last <span>Cake</span> recipes</h2>
                <div className={styles["container-articles"]}>
                    {spoonacularApiRecipes
                        .map(r =>
                            <Recipe
                                {...r}
                                key={r.id}
                                onClickDetails={onClickDetails}
                            />)}
                </div>
        </>
    );
}