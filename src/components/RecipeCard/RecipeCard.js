import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom'

import { useAuthContext } from "../../contexts/AuthContext";
import { getAllRecipeLikes, getLikeByRecipeAndUser } from '../../services/likeService'

import styles from './Recipe.module.css';
import { ButtonPrimarySm } from '../Buttons/Buttons';
import LikeButton from '../RecipeDetails/LikeButton.js/LikeButton';
import { recipeReducer } from '../../reducers/recipeReducer';


export default function RecipeCard(r) {
    const { isAuthenticated, userId } = useAuthContext();
    const [recipe, dispatch] = useReducer(recipeReducer, { recipe: {}, loading: true, error: null, likes: [] });

    const isOwner = r._ownerId === userId;

    useEffect(() => {
        if (r._id) {
            Promise.all([
                getAllRecipeLikes(r._id),
                getLikeByRecipeAndUser(r._id, userId),
            ]).then(([likes, like]) => {
                const recipeState = {
                    ...r, // original recipe
                    likes, // add likes array with their own data
                    isUserLike: like[0] // true/false user like recipe
                };

                dispatch({ type: 'FETCH_RECIPE', payload: recipeState });

            });
        }
    }, [r._id, userId]);


    const longTitle = r.title;
    const shortenedTitle = longTitle.slice(0, 50) + (longTitle.length > 50 ? "..." : "");

    return (
        <>
            <article className={styles["articles"]}>
                <div className={styles['img-container']}>
                    <img className={styles["img-hero-recipe"]} src={r.image} alt={r.title} />
                </div>
                <div className={styles['hero-recipe-info']} >
                    <h2 className={styles["hero-recipe-title"]}>{shortenedTitle}</h2>
                    <div className={styles["recipe-buttons"]}>

                        {r._id &&
                            <>
                                <Link to={`/recipes/${r._id}`}>
                                    <ButtonPrimarySm value={'details'} />
                                </Link>
                                {isAuthenticated && !isOwner &&
                                    <LikeButton
                                        likes={recipe.likes}
                                        isUserLike={recipe.isUserLike}
                                        recipeId={r._id}
                                    />}
                                {isAuthenticated && isOwner &&
                                    <>
                                        <Link to={`/recipes/${r._id}`}>
                                            <ButtonPrimarySm value={'Edit'} />
                                        </Link>
                                        likes: {recipe.likes?.length}
                                    </>
                                }
                            </>
                        }

                        {r.id && <Link to={`/recipes/${r.id}`}>
                            <ButtonPrimarySm value={'View details'} />
                        </Link>}

                    </div>
                </div>
            </article>
        </>
    );
}