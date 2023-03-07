import { useEffect, useState } from 'react';
import * as recipeService from '../services/recipeService';
import styles from './RecipeList.module.css'

import Recipe from './Recipe';

export default function RecipeList() {

    // const [recipes, setRecipes] = useState([]);
    const [spoonacularTest, spoonacularTestRecipes] = useState([]);

    // useEffect(() => {
    //     recipeService.getRandomRecipe()
    //         .then(recipes => {
    //             setRecipes(recipes);
    //         })
    //         .catch(err => {
    //             console.log("Error" + err);
    //         });

    // }, []); //empty array!

    useEffect(() => {
        recipeService.spoonacularTest()
            .then(spoonacularTest => {
                // setTastyRecipes(tastyRecipes);
                spoonacularTestRecipes(spoonacularTest);
            })
            .catch(err => {
                console.log("Error" + err);
            });

    }, []); //empty array!

    return (
        <div className={styles["hero"]}>
            <>
            {spoonacularTest.map(r => <Recipe key={r.id} {...r}/>)}
            </>
        </div>
    );
}