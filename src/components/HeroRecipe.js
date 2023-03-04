import styles from './HeroSection.module.css';
import { MdFavoriteBorder, MdGrade } from "react-icons/md";

export default function HeroRecipe({
    idMeal, //id
    strMeal, //title recipe
    strCategory, //category
    strArea, //country
    strInstructions, //preparetion
    strMealThumb, //image
    strYoutube, //video 
    strTags, //"SideDish,Treat,Baking"
    strIngredient1, //to 20 =>"Plain Flour"
    strMeasure1, // to 20 =>  "375g"
    strSource, //get from

}) {

    console.log("strMeal " + strMeal)
    return (

        <article className={styles["articles"]}>
            <div className={styles['img-container']}>
                <img className={styles["img-hero-recipe"]} src={strMealThumb} alt={strMeal} />
            </div>
            <div className={styles['hero-recipe-info']} >
                <h2 className={styles["hero-recipe-title"]}>{strMeal}</h2>
                <hr />
                <div>{strCategory}</div>
                <div>{strArea}</div>
                <button>View details</button>
                <button><MdGrade/></button>
                <button><MdFavoriteBorder />  </button>
            </div>
        </article>
    );
}