import { Link } from 'react-router-dom';

import { useRecipeContext } from '../../contexts/RecipeContext';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from '../Profile/Profile.module.css';
import chef from "../../assets/chefHat.svg"
import { ButtonPrimary, ButtonPrimarySm } from '../Buttons/Buttons'
import UserRecipeCard from './ProfileData/UserRecipeCard';
import { useEffect, useState } from 'react';
import { recipeServiceFactory } from '../../services/recipeService';


export default function Profile() {
    const { username, userEmail, userId } = useAuthContext();
    const recipeService = recipeServiceFactory();
    const [userRecipes, setUserRecipes] = useState([]);
    // const { recipes } = useRecipeContext();
    // const resultRecipes = recipes.filter(recipe => recipe._ownerId === userId);

    const onEditHandler = (userId) => {

    }

    const onDeleteHandler = (userId) => {

    }

    useEffect(() => {
        recipeService.getAllUserRecipes(userId)
            .then(result => {
                console.log('userRecipes:', result);
                setUserRecipes(result);
            })

    }, [])

    return (
        <>
            <div className={styles["container"]} >

                <div className={`${styles['container-form']}`} >
                    <div className={styles["container-form-column-profile"]}>
                        <img className={styles["img"]} src={chef} alt="Profile Avatar" />
                        <ButtonPrimarySm value="Edit profile" onClick={onEditHandler} />
                        <ButtonPrimarySm value="Delete profile" onClick={onDeleteHandler} />                        </div>
                    <div className={styles["container-form-column-profile"]}>
                        <h2 className={styles["title"]}>username:
                            <span className={styles["data"]}> {username}</span>
                        </h2>
                        <h2 className={styles["title"]}>email: {userEmail}</h2>

                        <h2 className={styles["title"]}>liked Recipes: {userEmail}</h2>
                        <h2 className={styles["title"]}>saved Recipes: {userEmail}</h2>

                    </div>
                    <div className={styles["container-form-column"]}>
                        <h2 className={styles["title"]}>Listed Recipes</h2>

                        <div className={styles["container-form-column-recipes"]}>
                            {userRecipes.length > 0 ? userRecipes
                                .map(r =>
                                    <UserRecipeCard
                                        key={r._id}
                                        {...r}
                                    />)
                                :
                                <>
                                    <p>You don't have any recipes</p>
                                    <Link to="/recipes/create" className={styles["top-href"]}>
                                        <ButtonPrimary value={'Add recipe'} />
                                    </Link>

                                </>

                            }
                        </div>

                    </div>

                </div>


            </div >

        </>

    );
}