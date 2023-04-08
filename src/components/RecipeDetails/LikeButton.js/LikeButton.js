import { useReducer, useState, useEffect, useCallback } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { recipeReducer } from "../../../reducers/recipeReducer";
import * as likeService from '../../../services/likeService'

import styles from './LikeButton.module.css'
import { useAuthContext } from "../../../contexts/AuthContext";

export default function LikeButton({
    likes,
    recipeId,
    isUserLike,
}) {
    const [isLiked, setIsLiked] = useState(isUserLike);
    const [likesCount, setLikesCount] = useState(likes?.length || 0);
    const { userId } = useAuthContext();
    const [recipe, dispatch] = useReducer(recipeReducer, { recipe: {}, loading: true, error: null, likes: [] });


    // Optimize the performance of component, to memoize the handleLikeClick function 
    // and prevent it from being re-created on each re-render.
    const handleLikeClick = useCallback(async () => {
        try {
            if (isLiked) {
                const deletedLike = await likeService.unlikeRecipe(recipeId, userId);
                dispatch({
                    type: 'UNLIKE_RECIPE',
                    payload: deletedLike[1],
                });

                setLikesCount(likesCount - 1);

            } else {
                const newLike = await likeService.likeRecipe(recipeId, userId);
                dispatch({
                    type: 'LIKE_RECIPE',
                    payload: newLike,
                    // isUserLike: true

                });

                setLikesCount(likesCount + 1);
            }

            setIsLiked(!isLiked);
        } catch (error) {
            console.log('Error liking recipe:', error);
        }
    }, [isLiked, recipeId, userId, likesCount]);

    // update like state
    useEffect(() => {
        setIsLiked(isUserLike);
        setLikesCount(likes?.length || 0);
    }, [isUserLike]);

    return (
        <>

            <button
                className={styles["btnLike"]}
                onClick={handleLikeClick}
            >
                {isLiked ?
                    <MdFavorite size={'30px'} color="#fa004b" />
                    :
                    <MdFavoriteBorder size={'30px'} color="#fa004b" />
                }
                {likesCount}
            </button>
        </>
    );
};
