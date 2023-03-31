import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { recipeServiceFactory } from '../services/recipeService';

export const RecipeContext = createContext();

export const RecipeProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const recipeService = recipeServiceFactory();

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            }).catch(err => {
                console.log("Error Server" + err);
            });
    }, []);

    const onCreateRecipeSubmit = async (data) => {
        const newRecipe = await recipeService.create(data);

        setRecipes(state => [...state, newRecipe]);

        navigate('/recipes');
    };

    const onRecipeEditSubmit = async (values) => {
        const result = await recipeService.edit(values._id, values);

        setRecipes(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/recipes/${values._id}`);
    };

    const deleteRecipe = (recipeId) => {
        setRecipes(state => state.filter(recipe => recipe._id !== recipeId));
    };

    const getRecipe = (grecipeId) => {
        return recipes.find(recipe => recipe._id === grecipeId);
    };

    const contextValues = {
        recipes,
        onCreateRecipeSubmit,
        onRecipeEditSubmit,
        deleteRecipe,
        getRecipe,
    };

    return (
        <RecipeContext.Provider value={contextValues}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    const context = useContext(RecipeContext);

    return context;
};