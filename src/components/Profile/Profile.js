import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import styles from '../Profile/Profile.module.css';
import chef from "../../assets/chefHat.svg"
import { ButtonPrimary, ButtonPrimarySm } from '../Buttons/Buttons'
import UserRecipeCard from './ProfileData/UserRecipeCard';
import { recipeServiceFactory } from '../../services/recipeService';
import * as likeService from '../../services/likeService'
import UserLikedRecipeCard from './ProfileData/UserLikedRecipeCard';


export default function Profile() {
    const { username, userEmail, userId } = useAuthContext();
    const recipeService = recipeServiceFactory();
    const [userRecipes, setUserRecipes] = useState([]);
    const [userLikes, setUserLikes] = useState([]);


    const onEditHandler = (userId) => {
        // TODO not here
    }

    const onDeleteHandler = (userId) => {

    }

    useEffect(() => {

        recipeService.getAllUserRecipes(userId)
            .then(result => {
                setUserRecipes(result);
            });

        likeService.getLikeByUser(userId)
            .then(result => {
                setUserLikes(result);
            });

    }, [])

    return (
        <>
            <div className={styles["container"]} >

                <div className={`${styles['container-form']}`} >
                    <div className={styles["container-form-column-profile"]}>
                        <h2 className={styles["title"]}>Username:
                            <span className={styles["data"]}> {username}</span>
                        </h2>
                        <img className={styles["img"]} src={chef} alt="Profile Avatar" />
                        <h2 className={styles["title"]}>email: {userEmail}</h2>

                        {/* <ButtonPrimarySm value="Edit profile" onClick={onEditHandler} /> */}
                        {/* <ButtonPrimarySm value="Delete profile" onClick={onDeleteHandler} /> */}
                    </div>

                    <div className={styles["container-form-column"]}>
                        <h2 className={styles["title"]}>Your liked recipes {userLikes?.length}</h2>

                        <div className={styles["container-form-column-recipes"]}>
                            {userLikes?.length > 0 && userLikes
                                .map(l =>
                                    <UserLikedRecipeCard
                                        key={l._id}
                                        {...l}
                                    />
                                )
                            }
                        </div>

                        <div className={styles["container-message"]}>
                            {userLikes?.length === 0 && (
                                <>
                                    <p>You don't have any liked Recipes</p>
                                    <Link to="/recipes/" className={styles["top-href"]}>
                                        <ButtonPrimary value={'catalog'} />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className={styles["container-form-column"]}>
                        <h2 className={styles["title"]}>Your listed recipes {userRecipes?.length}</h2>

                        <div className={styles["container-form-column-recipes"]}>
                            {userRecipes.length > 0 && userRecipes
                                .map(r =>
                                    <UserRecipeCard
                                        key={r._id}
                                        {...r}
                                    />)
                            }
                        </div>

                        <div className={styles["container-message"]}>
                            {userRecipes.length === 0 &&
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