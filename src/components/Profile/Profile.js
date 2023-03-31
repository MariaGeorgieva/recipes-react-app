import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from '../Profile/Profile.module.css';
import chef from "../../assets/chefHat.svg"
import { ButtonPrimarySm } from '../Buttons/Buttons'

export default function Profile() {
    const { isAuthenticated, username, userEmail, userId } = useAuthContext();

    const onEditHandler = (userId) => {

    }

    const onDeleteHandler = (userId) => {

    }

    return (
        <>
            <div className={styles["container"]} >
                {isAuthenticated ?
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
                            <h2 className={styles["title"]}>Listed Recipes: {userEmail}</h2>
                        </div>

                    </div>

                    : <Navigate to="/login" />
                }
            </div >

        </>

    );
}