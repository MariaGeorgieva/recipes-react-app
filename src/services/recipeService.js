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

    const create = async (recipeData) => {
        const result = await request.post(baseUrl, recipeData);
        return result;
    };

    const edit = async (recipeId, data) => {
        const result = await request.put(`${baseUrl}/${recipeId}`, data)
        return result;
    };

    const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteRecipe,
    };
}