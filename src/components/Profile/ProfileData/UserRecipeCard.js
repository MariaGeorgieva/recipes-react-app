import { Link } from 'react-router-dom'
import styles from '../ProfileData/UserRecipeCard.module.css';

export default function UserRecipeCard({
    _id, //server
    image,
    title,

}) {

    return (
        <>
            <Link to={`/recipes/${_id}`}>
                <article className={styles["articles"]}>
                    <div className={styles['img-container']}>
                        <img className={styles["img-hero-recipe"]} src={image} alt={title} />
                    </div>
                </article>
            </Link>
        </>
    );
}