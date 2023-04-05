import { useReducer, useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { recipeReducer } from "../../../reducers/recipeReducer";
import { getLikeByRecipeAndUser, likeRecipe, unlikeRecipe } from '../../../services/likeService'


import styles from './LikeButton.module.css'
import { useAuthContext } from "../../../contexts/AuthContext";

// export default function LikeButton({
//     likes,
//     recipeId
// }) {

//     const [state, dispatch] = useReducer(recipeReducer, { likes: likes || 0 });

//     const {  userId } = useAuthContext();
//     let isUserLike = true;
//     // console.log("isUserLike", isUserLike);
//     console.log("likes", likes);

//     // console.log('isUserLike', isUserLike);

//     const handleLikeClick = async () => {
//         const response = await likeService.likeRecipe(recipeId, userId);
//         console.log('response like handle', response);
//         const updatedLikes = response && response.data && response.data.likes ? response.data.likes.length : 0;
//         dispatch({ type: 'LIKE_RECIPE', payload: updatedLikes });
//     };



//     return (
//         <>
//             { }
//             <button
//                 className={styles["btnLike"]}
//                 onClick={handleLikeClick}
//             >{isUserLike ?
//                 <MdFavorite size={'30px'} color="#fa004b" />
//                 :
//                 <MdFavoriteBorder size={'30px'} color="#fa004b" />}
//                 {likes}
//             </button>

//         </>
//     );
// };


export default function LikeButton({
    likes,
    recipeId
}) {
    const [state, dispatch] = useReducer(recipeReducer, { likes: likes || 0 });

    const { userId } = useAuthContext();
    const [isUserLike, setIsUserLike] = useState(false);

    useEffect(() => {
        getLikeByRecipeAndUser(likes, userId)
            .then((like) => {
                setIsUserLike(like !== null);
            })
            .catch((error) => {
                console.log("Error fetching like data:", error);
            });
    }, [likes, userId]);

    const handleLikeClick = async () => {
        const response = await likeRecipe(recipeId, userId);
        console.log('response like handle', response);
        const updatedLikes = response && response.data && response.data.likes ? response.data.likes.length : 0;
        dispatch({ type: 'LIKE_RECIPE', payload: updatedLikes });
        setIsUserLike(true);
    };

    const handleDislikeClick = async () => {
        const response = await unlikeRecipe(recipeId, userId);
        console.log('response dislike handle', response);
        const updatedLikes = response && response.data && response.data.likes ? response.data.likes.length : 0;
        dispatch({ type: 'UNLIKE_RECIPE', payload: updatedLikes });
        setIsUserLike(false);
    };

    return (
        <>
            <button
                className={styles["btnLike"]}
                onClick={isUserLike ? handleDislikeClick : handleLikeClick}
            >
                {isUserLike ? (
                    <MdFavorite size={"30px"} color="#fa004b" />
                ) : (
                    <MdFavoriteBorder size={"30px"} color="#fa004b" />
                )}
                {state.likes}
            </button>
        </>
    );
}

