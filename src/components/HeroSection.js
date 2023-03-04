import { useEffect, useState } from 'react';
import * as recipeService from '../services/recipeService';
import styles from './HeroSection.module.css'

import HeroRecipe from './HeroRecipe';

export default function HeroPosts() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getRandomRecipe()
            .then(recipes => {
                setRecipes(recipes);
            })
            .catch(err => {
                console.log("Error" + err);
            });

    }, []); //empty array!

    return (
        <div className={styles["hero"]}>
            <>
            {recipes.map(r => <HeroRecipe key={r.idMeal} {...r}/>)}
            </>
        </div>
    );
}