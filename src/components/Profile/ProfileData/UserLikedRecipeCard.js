import { Link } from 'react-router-dom'
import styles from '../ProfileData/UserRecipeCard.module.css';

export default function UserLikedRecipeCard({
    recipe,
    recipeId

}) {

    return (
        <>
            <Link to={`/recipes/${recipeId}`}>
                <article className={styles["articles"]}>
                    <div className={styles['img-container']}>
                        <img className={styles["img-hero-recipe"]} src={recipe.image} alt={recipe.title} />

                    </div>
                </article>
            </Link>
        </>
    );
}