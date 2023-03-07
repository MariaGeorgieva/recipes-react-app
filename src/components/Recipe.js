import styles from './RecipeList.module.css';
// import { MdFavoriteBorder, MdGrade } from "react-icons/md";
// import categoryIcon from '../assets/category.svg'

export default function RecipeList({
    id,
    image,
    title,

}) {
    return (

        <article className={styles["articles"]}>
            <div className={styles['img-container']}>
                <img className={styles["img-hero-recipe"]} src={image} alt={title} />
            </div>
            <div className={styles['hero-recipe-info']} >
                <h2 className={styles["hero-recipe-title"]}>{title}</h2>
                <hr />
                <button> View details</button>
                {/* <button><MdGrade /></button>
                <button><MdFavoriteBorder />  </button> */}
            </div>
        </article>
    );
}