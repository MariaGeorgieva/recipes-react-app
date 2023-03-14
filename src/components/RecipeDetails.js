import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as recipeService from '../services/recipeService';
import styles from './RecipeDetails.module.css'

import IngredientsList from "./IngredientsList";
import LoadingSpinner from "./LoadingSpinner";

import meal from '../assets/meal.svg'
import prep from '../assets/prep.svg'
import time from '../assets/time.svg'
import servings from '../assets/servings.svg'

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        recipeService.getRecipeById(recipeId)
            .then(recipe => {
                setRecipe(recipe);
                setIsLoading(false);
            });
    }, [recipeId])

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <article className={styles["container"]}>
                    <header className={styles["header-container"]}>
                        <div className={styles["header-img"]}>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                        <div className={styles["recipe-info"]}>
                            <h2>{recipe.title}</h2>
                            <section className={styles["recipe-info-section"]}>
                                <div className={styles["recipe-icons"]}>
                                    <img src={meal} alt="Course" />
                                    <div className={styles["recipe-icons-text"]}>
                                        <span>Course</span>
                                        <strong> {recipe.dishTypes}</strong>
                                    </div>
                                </div>

                                <div className={styles["recipe-icons"]}>
                                    <img src={prep} alt="Course" />
                                    <div className={styles["recipe-icons-text"]}>
                                        <span>Prep Time</span>
                                        <strong> {recipe.preparationMinutes < 0 ? 0 : recipe.preparationMinutes} min</strong>
                                    </div>
                                </div>

                                <div className={styles["recipe-icons"]}>
                                    <img src={time} alt="Course" />
                                    <div className={styles["recipe-icons-text"]}>
                                        <span>Cook Time</span>
                                        <strong> {recipe.readyInMinutes} min</strong>
                                    </div>
                                </div>

                                <div className={styles["recipe-icons"]}>
                                    <img src={servings} alt="Course" />
                                    <div className={styles["recipe-icons-text"]}>
                                        <span>Servings</span>
                                        <strong> {recipe.servings}</strong>
                                    </div>
                                </div>
                            </section>
                            <h3 className={styles["summary-title"]}> Summary</h3>
                            <p className={styles["summary"]} >{recipe.summary}</p>
                        </div>

                    </header>


                    <div className={styles["container-prep"]}>
                        <div className={styles["ingredients"]}>
                            <h2>Ingredients</h2>
                            <ul className="list">
                                {recipe.extendedIngredients ?
                                    recipe.extendedIngredients.map(i => <IngredientsList key={`${i.id}${i.name}`} {...i} />)
                                    : ""}

                            </ul>
                        </div>
                        <div className={styles["instructions"]}>
                            <h2>Instructions</h2>
                            <div>{recipe.instructions
                                // ? recipe.instructions.split('\r+\n').join('\n')
                                ? recipe.instructions
                                : ""}</div>
                        </div>
                    </div>
                    <footer>
                        <p>Source:
                            <a href={recipe.sourceUrl} target="_blank" rel="noreferrer" >{recipe.sourceName}</a></p>
                    </footer>


                </article>
            }
        </>
    );
} 