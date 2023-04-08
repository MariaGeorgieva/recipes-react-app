import { useEffect, useState } from 'react';
import { recipeServiceFactory } from '../../../services/recipeService';

import styles from '../../RecipeList/RecipeList.module.css'
import RecipeCard from '../../RecipeCard/RecipeCard';
import LoadingSpinner from "../../LoadingSpiner/LoadingSpinner";
import Select from '../../Select/Select'

export default function LastAddedRecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageSize, setPageSize] = useState(2);

    const recipeService = recipeServiceFactory();

    const options = [
        { label: "2", value: 2 },
        { label: "4", value: 4 },
    ];

    useEffect(() => {
        setIsLoading(true);
        recipeService.getLatestRecipesPaginate(pageSize)
            .then(recipeData => {
                setRecipes(recipeData);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("Error Server" + err);
            });
    }, [pageSize]);

    const handlePageSizeChange = (event) => {
        setPageSize(parseInt(event.target.value));
    }

    return (
        <>
            <h2 className={styles["title-categories"]}> <strong>Last added recipes</strong>  </h2>
            <div>
            <Select
                    name="dishTypes"
                    label="Recipes per page:"
                    options={options}
                    value={options}
                    onChangeHandler={handlePageSizeChange}
                />                
            </div>
            {isLoading ? <LoadingSpinner /> :
                <div className={styles["container-articles"]}>
                    {recipes && recipes
                        .map(r =>
                            <RecipeCard
                                key={r._id}
                                {...r}
                            />)}
                </div>
            }
        </>
    );
}
