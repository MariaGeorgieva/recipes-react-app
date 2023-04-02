import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as recipeServiceAPI from '../../services/recipeServiceAPI'

import { recipeServiceFactory } from '../../services/recipeService'
import { useService } from '../../hooks/useService';
import styles from '../RecipeDetails/RecipeDetails.module.css'

import IngredientsList from "../IngredientsList/IngredientsList";
import StepList from '../StepsList/StepsList';
import IngredientsListAPI from "../IngredientsList/IngredientsListAPI";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";
import { ButtonPrimarySm } from '../Buttons/Buttons';

import meal from '../../assets/meal.svg'
import prep from '../../assets/prep.svg'
import time from '../../assets/time.svg'
import servings from '../../assets/servings.svg'
import { useRecipeContext } from '../../contexts/RecipeContext';
import { useAuthContext } from '../../contexts/AuthContext';

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const { userId, isAuthenticated } = useAuthContext();
    const [recipe, setRecipe] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { deleteRecipe } = useRecipeContext();
    const recipeService = useService(recipeServiceFactory);

    const navigate = useNavigate();


    // getRecipe

    useEffect(() => {
        setIsLoading(true);
        // TODO length check
        if (recipeId.length < 10) {
            recipeServiceAPI.getRecipeByIdAPI(recipeId)
                .then(recipe => {
                    setRecipe(recipe);
                    setIsLoading(false);
                });
        } else {
            recipeService.getOne(recipeId)
                .then(recipe => {
                    setRecipe(recipe);
                    setIsLoading(false);
                });
        }
    }, [recipeId])


    const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${recipe.title}`);

        if (result) {
            await recipeService.delete(recipe._id);

            deleteRecipe(recipe._id);

            navigate('/recipes');
        }
    };


    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <article className={styles["container"]}>
                    <header className={styles["header-container"]}>
                        <div className={styles["header-img"]}>
                            <img src={recipe.image || recipe.imgUrl} alt={recipe.title} />
                            <Link to={`/recipes/${recipe._id}/edit`} className="button">Edit</Link>
                        </div>
                        <div className={styles["recipe-info"]}>
                            <h2>{recipe.title}</h2>
                            <section className={styles["recipe-info-section"]}>
                                <div className={styles["recipe-icons"]}>
                                    <img src={meal} alt="Course" />
                                    <div className={styles["recipe-icons-text"]}>
                                        <span>Course</span>
                                        {recipe?.id &&
                                            <strong> {recipe.dishTypes}</strong>
                                        }

                                        {recipe?._id &&
                                            <strong> {recipe.dishTypes}</strong>
                                        }
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
                    {(recipe?._id && isOwner) &&
                        <div className={styles["section-btns"]} >
                            <Link to={`/recipes/${recipe._id}/edit`}>
                                <ButtonPrimarySm value={'Edit'} />
                            </Link>
                            <button className={styles["btn-delete"]} onClick={onDeleteClick}>DELETE</button>
                        </div>
                    }

                    <div className={styles["container-prep"]}>
                        <div className={styles["ingredients"]}>
                            <h2>Ingredients</h2>
                            <ul className="list">
                                {recipe.id && recipe.extendedIngredients ?
                                    recipe.extendedIngredients.map(i => <IngredientsListAPI key={`${i.id}${i.name}`} {...i} />)
                                    : ""
                                }

                                {recipe._id &&
                                    recipe.extendedIngredients ?
                                    recipe.extendedIngredients.map((i) => <IngredientsList key={`${i.ingredients}${Math.random()}`} {...i} />)
                                    : ""
                                }

                            </ul>
                        </div>
                        <div className={styles["instructions"]}>
                            <h2>Instructions</h2>
                            <div>
                                {recipe.id && recipe.instructions
                                    //TODO ? recipe.instructions.split('\r+\n').join('\n')
                                    ? recipe.instructions
                                    : ""
                                }
                                {recipe._id && recipe.steps ?
                                    recipe.steps.map(s => <StepList key={`${s.instruction}${Math.random()}`} {...s} />)
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                    <footer>
                        {recipe.id &&
                            <p>Source:
                                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer" >{recipe.sourceName}</a></p>
                        }
                    </footer>

                    {/* TODO {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}
                </article>
            }
        </>
    );
} 