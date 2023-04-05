import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export async function getAllRecipeLikes(recipeId) {
    const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    // const result = await request.get(`${baseUrl}?distinct=${recipeId}&count`);//TODO works 
    try {
        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);//TODO works 
        const likes = Object.values(result);
        // console.log("getAllRecipeLikes likes: ", likes);
        return likes;
    } catch (error) {
        console.error(`Error fetching likes for recipe ${recipeId}: ${error.message}`);
        return [];
    }

}

export async function getLike(likeId) {
    const result = await request.get(`${baseUrl}/${likeId}`);
    return result

 }

export async function getLikeByRecipeAndUser(recipeId, userId) {
    const likes = await getAllRecipeLikes(recipeId);

    if (likes?.length > 0) {
        const like = likes.some((like) => like.userId === userId);
        
        return like;
    } else {
        return false;
    }
}

async function insertLike(newLike) {
    const result = await request.post(baseUrl, newLike);
    console.log('Response from server:', result);
    return result;
}

async function updateLike(updatedLike) {

    const result = await request.put(`${baseUrl}/${updatedLike._id}`, updatedLike);
    console.log('Response from server:', result);

    return result;
}

export const likeRecipe = async (recipeId, userId) => {
    try {
        // toDO state recipe -> Check if the recipe owner is liking his/her own recipe
        const recipe = await request.get(`http://localhost:3030/data/recipes/${recipeId}`);

        if (recipe?._ownerId === userId) {
            throw new Error('Recipe owner cannot like his/her own recipe');
        }

        // Check if user has already liked the recipe
        const existingLike = await getLikeByRecipeAndUser(recipeId, userId);
        // toDO state recipe -> 
        if (existingLike) {
            throw new Error('User has already liked this recipe');
        }

        // Add new like for the recipe and user
        const newLike = {
            _ownerId: userId,
            recipeId,
            userId,
            likes: 1,
            _createdOn: Date.now(),
        };

        const result = await insertLike(newLike);

        // console.log("insertLike(newLike) result ", Object.values(result));
        console.log("insertLike(newLike) result ", result);
        return Object.values(result);

    } catch (error) {
        throw new Error(`Error liking recipe: ${error.message}`);
    }
};

export const unlikeRecipe = async (recipeId, userId) => {
    try {
        // Get the existing like for the recipe and user 
        const existingLike = await getLikeByRecipeAndUser(recipeId, userId);

        console.log("existingLike", existingLike);
        if (!existingLike) {
            throw new Error('User has not liked this recipe');
        }

        // Update the like by decrementing the likes by 1
        const updatedLike = {
            ...existingLike,
            likes: existingLike.likes - 1,
        };

        if (updatedLike.likes === 0) {
            // Remove the like if it has no likes left
            const result = await request.delete(`${baseUrl}/${existingLike._id}`);
            return result;
        } else {
            // Update the like with the new like count
            console.log('Update the like with the new like count', updatedLike);
            const result = await updateLike(updatedLike);
            return result;
        }
    } catch (error) {
        throw new Error(`Error unliking recipe: ${error.message}`);
    }
};

// export const getAllLikes = async (recipeId) => {
//     const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
//     const relationQuery = encodeURIComponent(`author=_ownerId:users`);
//     try {
//         const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
//         const likes = Object.values(result);

//         return likes;
//     } catch (error) {
//         console.log('Error result getAllLikes', error)
//     }

// };
// export async function getLikeByRecipeAndUser(recipeId, userId) {
//     const likes = await getAllLikes(recipeId);
//     if (likes.length > 0) {
//         const like = likes.find((like) => like.userId === userId);
//         return like;
//     } else {
//         return null;
//     }
// }

// async function insertLike(newLike) {
//     const result = await request.post(baseUrl, newLike);
//     return result.data;
// }

// export const likeRecipe = async (recipeId, userId) => {
//     try {
//         const recipe = await getRecipeById(recipeId);
//         if (!recipe) {
//             throw new Error('Recipe not found');
//         }

//         if (recipe._ownerId === userId) {
//             throw new Error('Owner cannot like their own recipe');
//         }

//         const existingLike = await getLikeByRecipeAndUser(recipeId, userId);
//         if (existingLike) {
//             throw new Error('User has already liked this recipe');
//         }

//         const newLike = { recipeId, userId, likes: 1 };
//         const result = await insertLike(newLike);
//         console.log('likeRecipe response', result);
//         return result;
//     } catch (error) {
//         console.log('Error result likeRecipe', error);
//         throw new Error(`Error liking recipe: ${error.message}`);
//     }
// };


// async function getLikeByRecipeAndUser(recipeId, userId) {
//     const likes = await getAllLikes(recipeId);
//     if (likes.length > 0) {
//         const like = likes.find((like) => like.userId === userId);
//         return like;
//     } else {
//         return null;
//     }
// }

// export const likeRecipe = async (recipeId, userId) => {
//     try {
//         // Check if user has already liked the recipe
//         const existingLike = await getLikeByRecipeAndUser(recipeId, userId);

//         if (existingLike) {
//             throw new Error('User has already liked this recipe');
//         }

//         // Add new like for the recipe and user
//         const newLike = {
//             recipeId,
//             userId,
//             likes: 1
//         };

//         const result = await request.post(baseUrl, newLike);

//         return result;
//     } catch (error) {
//         console.log('Error liking recipe:', error.message);
//         throw new Error(`Error liking recipe: ${error.message}`);
//     }
// };


