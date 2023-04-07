import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export async function getAllRecipeLikes(recipeId) {
    const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);

    try {
        const likes = await request.get(`${baseUrl}?where=${searchQuery}`);//TODO works 
        return likes;

    } catch (error) {
        console.error(`Error fetching likes for recipe ${recipeId}: ${error.message}`);
        return [];
    }

}

export async function getLike(likeId) {
    try {
        const result = await request.get(`${baseUrl}/${likeId}`);
        console.log('getLike', result);
        return result
    } catch (error) {
        console.error(`Error fetching like data ${likeId}: ${error.message}`);
    }
}

export async function getLikeByUser(userId) {
    const searchQuery = encodeURIComponent(`userId="${userId}"`);
    const relationQuery = encodeURIComponent(`recipe=recipeId:recipes`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);//TODO works 

    console.log('getLikeByUser likes', result);
    return result;
}

export async function getLikeByRecipeAndUser(recipeId, userId) {
    const likes = await getAllRecipeLikes(recipeId);

    if (likes?.length > 0) {
        const isUserLike = likes.some((like) => like.userId === userId);
        const like = likes && likes?.find((like) => like.userId === userId);

        return [isUserLike, like];
    } else {
        return false;
    }
}

async function insertLike(newLike) {
    try {
        const result = await request.post(baseUrl, newLike);
        // console.log('insertLike:', result);
        return result;
    } catch (error) {
        console.error(`Error insertLike ${newLike}: ${error.message}`);
    }

}

export const likeRecipe = async (recipeId, userId) => {
    try {
        // toDO state recipe -> Check if the recipe owner is liking his/her own recipe
        const recipe = await request.get(`http://localhost:3030/data/recipes/${recipeId}`);

        if (recipe?._ownerId === userId) {
            throw new Error('Recipe owner cannot like his/her own recipe');
        }

        // Check if user has already liked the recipe
        const responce = await getLikeByRecipeAndUser(recipeId, userId);
        const existingLike = responce[0];
        // console.log('lelikeRecipe responce existingLike ', responce[0]);
        // toDO state recipe -> 
        if (existingLike) {
            throw new Error('User has already liked this recipe');
        }

        // Add new like for the recipe and user
        const newLike = {
            _ownerId: userId,
            recipeId,
            userId,
            // likes: 1,
            _createdOn: Date.now(),
        };

        const result = await insertLike(newLike);

        // console.log("insertLike(newLike) result ", Object.values(result));
        console.log("insertLike(newLike) result ", result);
        // return Object.values(result);
        return result;

    } catch (error) {
        throw new Error(`Error liking recipe: ${error.message}`);
    }
};

export const unlikeRecipe = async (recipeId, userId) => {
    try {
        // Get the existing like for the recipe and user 
        const existingLike = await getLikeByRecipeAndUser(recipeId, userId);
        // const existingLike = result[1]?._id; //just like id to delete

        // console.log("unlikeRecipe _id", existingLike);

        if (!existingLike) {
            throw new Error('User has not liked this recipe');
        }

        console.log('existingLike',existingLike);
        const resultDelete = await request.delete(`${baseUrl}/${existingLike[1]._id}`);
        console.log("resultDelete", resultDelete);
        return existingLike;

    } catch (error) {
        throw new Error(`Error unliking recipe: ${error.message}`);
    }
};
