import { useReducer, useState,useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { recipeReducer } from "../../../reducers/recipeReducer";
import * as likeService from '../../../services/likeService'

import styles from './LikeButton.module.css'
import { useAuthContext } from "../../../contexts/AuthContext";

export default function LikeButton({
    likes,
    recipeId,
    isUserLike
}) {

    console.log("LikeButton likes ", likes);
    console.log("LikeButton likes?.length ", likes?.length);
    console.log("LikeButton recipeId", recipeId);
    console.log("LikeButton isUserLike", isUserLike);

    const [isLiked, setIsLiked] = useState(isUserLike);
    const { userId } = useAuthContext();
    const [recipe, dispatch] = useReducer(recipeReducer, {});

    const handleLikeClick = async () => {
        try {
            if (isLiked) {
                await likeService.unlikeRecipe(recipeId, userId);
                dispatch({ type: 'UNLIKE_RECIPE', payload: userId });
            } else {
                await likeService.likeRecipe(recipeId, userId);
                dispatch({ type: 'LIKE_RECIPE', payload: { userId, recipeId } });
            }
            
            setIsLiked(!isLiked);

        } catch (error) {
            console.log('Error liking recipe:', error);
        }
    };

    // update like state
    useEffect(() => {
        setIsLiked(isUserLike);
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
                {likes?.length}
            </button>
        </>
    );
};
