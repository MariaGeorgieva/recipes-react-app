import { useEffect, useState } from 'react';
import { recipeServiceFactory } from '../../../services/recipeService';

import styles from './LastAddedRecipeList.module.css'
import RecipeCard from '../../RecipeCard/RecipeCard';
import LoadingSpinner from "../../LoadingSpiner/LoadingSpinner";
import Select from '../../Select/Select'

export default function LastAddedRecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageSize, setPageSize] = useState(4);

    const recipeService = recipeServiceFactory();

    const options = [
        { label: "4", value: 4 },
        { label: "8", value: 8 },
        { label: "16", value: 16 },
        { label: "24", value: 24 },
        { label: "32 ", value: 32 },
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
            <div className={styles["select"]}>
                <h2 className={styles["title-categories"]}> <strong>Last added recipes</strong>  </h2>

                <Select
                    className={styles["select-width"]}
                    label="Recipes per page:"
                    options={options}
                    value={options.value}
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
