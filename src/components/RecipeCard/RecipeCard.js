import { Link } from 'react-router-dom'

import styles from './Recipe.module.css';
import { MdFavoriteBorder, MdGrade } from "react-icons/md";
import { ButtonPrimarySm } from '../Buttons/Buttons';


export default function RecipeCard({
    _id, //server
    id, //API
    image,
    title,

}) {

    return (
        <>
            <article className={styles["articles"]}>
                <div className={styles['img-container']}>
                    <img className={styles["img-hero-recipe"]} src={image} alt={title} />
                </div>
                <div className={styles['hero-recipe-info']} >
                    <h2 className={styles["hero-recipe-title"]}>{title}</h2>
                    <div className={styles["recipe-buttons"]}>

                        {_id && <Link to={`/recipes/${_id}`}>
                            <ButtonPrimarySm value={'View details'} />
                        </Link>}

                        {id && <Link to={`/recipes/${id}`}>
                            <ButtonPrimarySm value={'View details'} />
                        </Link>}

                        <button className={styles["material-icons"]}><MdGrade /></button>
                        <button className={styles["material-icons"]}><MdFavoriteBorder />  </button>
                    </div>
                </div>
            </article>
        </>
    );
}