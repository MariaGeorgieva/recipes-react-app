import IngredientsList from "./IngredientsList";
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import * as recipeService from '../services/recipeService';

export default function RecipeDetails({
    // id,
    // title,
    // dishTypes,
    // image,
    // summary,
    // extendedIngredients,
    // instructions,
    // preparationMinutes,
    // readyInMinutes,
    // servings,
    // sourceName,
    // sourceUrl,

}) {
    const { recipeId } = useParams();
    console.log("Give regipe id: " + recipeId)
    // const navigate = useNavigate();

    const [recipe, setRecipe] = useState({});

    // useEffect(() => {
    //     recipeService.getRecipeById(recipeId)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log("Recipe : " + data)
    //             setRecipe(data);
    //         })
    // }, [recipeId])

    useEffect(() => {
       recipeService.getRecipeById(recipeId)
            .then(data => {
                console.log("Recipe : " + data)
                setRecipe(data);
            });
    }, [recipeId])

    return (
        <article>
            <header>
                <h2>{recipe.title}</h2>
                <p>Course: {recipe.dishTypes}</p>
                <p>Prep Time: {recipe.preparationMinutes}</p>
                <p>Cook Time: {recipe.readyInMinutes}</p>
                <p>Servings: {recipe.servings}</p>
                <h4>{recipe.summary}</h4>
            </header>
            <div className="container">
                <img src={recipe.image} alt={recipe.title} />
                <div className="container-ingredients">
                    <h2>Ingredients</h2>
                    <ul className="list">
                        {/* {recipe.extendedIngredients.map(i => <IngredientsList key={`${i.id}${i.name}`} {...i} />)} */}
                    </ul>
                </div>
            </div>
            <div className="container-instructions">
                <h2>Instructions</h2>
                {/* <p>{recipe.instructions.split('\r+\n').join("<br />")}</p> */}

            </div>
            <footer>
                <p>Source:
                    <a href={recipe.sourceUrl} target="_blank" rel="noreferrer" >{recipe.sourceName}</a></p>
            </footer>


        </article>
    );
} 