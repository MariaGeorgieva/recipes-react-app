import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as recipeService from '../services/recipeService';

import styles from './RecipeList.module.css';
import { MdFavoriteBorder, MdGrade } from "react-icons/md";
import { ButtonPrimarySm } from './Buttons';


export default function Recipe({
    id,
    image,
    title,
    onClickDetails,
}) {
    
    // const onBackButtonClick = () => {
    //     navigate('/characters');
    // };
    return (
        <>
            <article className={styles["articles"]}>
                <div className={styles['img-container']}>
                    <img className={styles["img-hero-recipe"]} src={image} alt={title} />
                </div>
                <div className={styles['hero-recipe-info']} >
                    <h2 className={styles["hero-recipe-title"]}>{title}</h2>
                    <div className={styles["recipe-buttons"]}>
                        <Link to={`/recipes/${id}`}>{'View details'}</Link>
                        {/* <ButtonPrimarySm value={'View details'} clickHandler={() => onClickDetails(id)} /> */}

                        <button className={styles["material-icons"]}><MdGrade /></button>
                        <button className={styles["material-icons"]}><MdFavoriteBorder />  </button>
                    </div>
                </div>
            </article>
        </>
    );
}