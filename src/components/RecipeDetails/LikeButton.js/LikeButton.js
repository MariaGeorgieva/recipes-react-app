import { useReducer, useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { recipeReducer } from "../../../reducers/recipeReducer";
import * as likeService from '../../../services/likeService'

import styles from './LikeButton.module.css'
import { useAuthContext } from "../../../contexts/AuthContext";

export default function LikeButton({
    likes,
    recipeId,
    isUserLike,
    numberLikes

}) {



    const [isLiked, setIsLiked] = useState(isUserLike);
    const [likesCount, setLikesCount] = useState(likes?.length || 0);
    const { userId } = useAuthContext();
    const [recipe, dispatch] = useReducer(recipeReducer, { recipe: {}, loading: true, error: null, likes: [] });

    // console.log("Recipe state recipe.likes ", recipe.likes.length);

    const handleLikeClick = async () => {
        try {
            if (isLiked) {
                const deletedLike = await likeService.unlikeRecipe(recipeId, userId);
                // console.log('LikeButton deletedLike[1])', deletedLike[1]);

                dispatch({
                    type: 'UNLIKE_RECIPE',
                    payload: deletedLike[1],
                    // isUserLike: false
                });
                setLikesCount(likesCount - 1);

            } else {

                const newLike = await likeService.likeRecipe(recipeId, userId);

                // console.log('LikeButton add newLike', newLike);
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
    };

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
