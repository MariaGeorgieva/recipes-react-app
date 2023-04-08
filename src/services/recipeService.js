import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/recipes';

export const recipeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);

        const recipes = Object.values(result);

        return recipes;
    };



    const getOne = async (recipeId) => {
        const result = await request.get(`${baseUrl}/${recipeId}`);
        return result;
    };

    const getRecipesByCategory = async (category) => {
        const searchQuery = encodeURIComponent(`dishTypes="${category}"`);
        const result = await request.get(`${baseUrl}?where=${searchQuery}`);

        return result
    }

    const getLatestRecipes = async () => {
        const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
        console.log('getLatestRecipes', result);
        return result
    }

    const create = async (recipeData) => {
        console.log("recipeData", recipeData);

        const result = await request.post(baseUrl, recipeData);
        return result;
    };

    const edit = async (recipeId, data) => {
        const result = await request.put(`${baseUrl}/${recipeId}`, data)
        return result;
    };

    const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);

    const getAllUserRecipes = async (userId) => {
        const result = await request.get(`${baseUrl}/?count}`); //all recipes
        const resultRecipes = result.filter(recipe => recipe._ownerId === userId);
        return resultRecipes;
    };



    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteRecipe,
        getAllUserRecipes,
        getRecipesByCategory,
        getLatestRecipes
    };
}