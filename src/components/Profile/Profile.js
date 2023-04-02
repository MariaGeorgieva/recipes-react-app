import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { recipeServiceFactory } from '../../services/recipeService';

import styles from '../Profile/Profile.module.css';
import chef from "../../assets/chefHat.svg"
import { ButtonPrimary, ButtonPrimarySm } from '../Buttons/Buttons'
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";
import UserRecipeCard from './ProfileData/UserRecipeCard';

export default function Profile() {
    const { username, userEmail, userId } = useAuthContext();
    const [userRecipes, setUserRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const recipeService = recipeServiceFactory();


    const onEditHandler = (userId) => {

    }

    const onDeleteHandler = (userId) => {

    }

    useEffect(() => {
        setIsLoading(true);
        recipeService.getAllUserRecipes(userId)
            .then(result => {
                setUserRecipes(result)
                setIsLoading(false);
            }).catch(err => {
                console.log("Error User recipes: " + err.message);
            });
    }, []);

    console.log("userRecipes", userRecipes.length, userRecipes);
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
                        {isLoading ? <LoadingSpinner /> :
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
                        }
                    </div>

                </div>


            </div >

        </>

    );
}