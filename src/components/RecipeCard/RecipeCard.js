import { useEffect, useState, useReducer } from 'react';
import { Link } from 'react-router-dom'

import { useAuthContext } from "../../contexts/AuthContext";
// import { useService } from '../../hooks/useService'
// import { recipeServiceFactory } from '../../services/recipeService';
import { getAllRecipeLikes, getLikeByRecipeAndUser } from '../../services/likeService'

import styles from './Recipe.module.css';
import { MdGrade } from "react-icons/md";
import { ButtonPrimarySm } from '../Buttons/Buttons';
import LikeButton from '../RecipeDetails/LikeButton.js/LikeButton';
import { recipeReducer } from '../../reducers/recipeReducer';


export default function RecipeCard(r) {
    const { isAuthenticated, userId } = useAuthContext();
    const [recipe, dispatch] = useReducer(recipeReducer, { recipe: {}, loading: true, error: null, likes: [] });

    const isOwner = recipe._ownerId === userId;


    useEffect(() => {
        if (r._id) {
            Promise.all([
                getAllRecipeLikes(r._id),
                getLikeByRecipeAndUser(r._id, userId),
            ]).then(([likes, like]) => {
                                const recipeState = {
                    ...r, // original recipe
                    likes, // TODO add likes array with their own data
                    isUserLike: like[0] //TODO ok just true/false for user like recipe
                };

                dispatch({ type: 'FETCH_RECIPE', payload: recipeState });  //TODO not all from recipe

            });
        }
    }, [r._id, userId]);

    return (
        <>
            <article className={styles["articles"]}>
                <div className={styles['img-container']}>
                    <img className={styles["img-hero-recipe"]} src={r.image} alt={r.title} />
                </div>
                <div className={styles['hero-recipe-info']} >
                    <h2 className={styles["hero-recipe-title"]}>{r.title}</h2>
                    <div className={styles["recipe-buttons"]}>

                        {r._id &&
                            <>
                                <Link to={`/recipes/${r._id}`}>
                                    <ButtonPrimarySm value={'View details'} />
                                </Link>
                                {isAuthenticated && !isOwner &&
                                    <LikeButton
                                        likes={recipe.likes}
                                        isUserLike={recipe.isUserLike}
                                        recipeId={r._id}
                                    />}
                            </>
                        }

                        {r.id && <Link to={`/recipes/${r.id}`}>
                            <ButtonPrimarySm value={'View details'} />
                        </Link>}

                        <button className={styles["material-icons"]}><MdGrade /></button>

                    </div>
                </div>
            </article>
        </>
    );
}