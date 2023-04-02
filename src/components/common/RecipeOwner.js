import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useRecipeContext } from "../../contexts/RecipeContext";

export const RecipeOwner = ({
    children,
}) => {
    const { recipeId } = useParams();
    const { getRecipe } = useRecipeContext();
    const { userId } = useAuthContext();

    const currentRecipe = getRecipe(recipeId);

    if (currentRecipe && currentRecipe._ownerId !== userId) {
        return <Navigate to={`/recipes/${recipeId}`} replace />
    }

    return children ? children : <Outlet />
};