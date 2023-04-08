import { useEffect, useState, useRef } from 'react';
import * as recipeServiceAPI from '../../services/recipeServiceAPI';
import { recipeServiceFactory } from '../../services/recipeService';

import styles from './RecipeList.module.css'
import RecipeCard from '../RecipeCard/RecipeCard';
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";
import { useCategoryContext } from '../../contexts/CategoryContext';


export default function RecipeList() {
    const [spoonacularApiRecipes, setSpoonacularApiRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const { selectedCategory } = useCategoryContext()
    const [isLoading, setIsLoading] = useState(false);
    const prevSelectedCategoryRef = useRef(selectedCategory);


    const recipeService = recipeServiceFactory();

    useEffect(() => {
        setIsLoading(true);
        recipeServiceAPI.getRecipeCategoryAPI(selectedCategory, 8)
            .then(spoonacularTest => {
                setSpoonacularApiRecipes(spoonacularTest);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("Error API" + err);
            });

        setIsLoading(true);
        recipeService.getRecipesByCategory(selectedCategory)
            .then(recipeData => {
                setRecipes(recipeData);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("Error Server" + err);
            });

        prevSelectedCategoryRef.current = selectedCategory;

    }, [selectedCategory]); // array!


    return (
        <>
            <h2 className={styles["title-categories"]}> {recipes.length === 0 && <strong>No </strong>}Server <strong>{selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)}</strong>  recipes</h2>
            <div className={styles["container-articles"]}>
                {recipes && recipes
                    .map(r =>
                        <RecipeCard
                            key={r._id}
                            {...r}
                        />)}

            </div>
            <h2 className={styles["title-categories"]}>Spoonacular <strong>{selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)}</strong> recipes</h2>
            {isLoading ? <LoadingSpinner /> :
                <div className={styles["container-articles"]}>
                    {spoonacularApiRecipes?.length > 0 && spoonacularApiRecipes
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