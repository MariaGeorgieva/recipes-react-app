import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import RecipeList from '../RecipeList/RecipeList'

import styles from '../Categories/Categories.module.css'
import cakes from '../../assets/cake2.svg'
import iceCream from '../../assets/ice-cream.svg'
import cupcakes from '../../assets/muffin.svg'
import macaron from '../../assets/macaron.svg'
import donut from '../../assets/donut.svg'
import croissant from '../../assets/croissant2.svg'
import chocolate from '../../assets/chocolate.svg'
import drinks from '../../assets/coffee.svg'
import dishes from '../../assets/dinner-table.svg'
import pancakes from '../../assets/pancakes.svg'
import { useCategoryContext } from '../../contexts/CategoryContext';


export default function CategoryList() {
    const {onClickCategoryHandler} = useCategoryContext()

    const categories = [
        { name: "Cakes", url: "cake", image: cakes },
        { name: "Ice Cream", url: "ice-cream", image: iceCream },
        { name: "Cupcakes", url: "cupcakes", image: cupcakes },
        { name: "Macarons", url: "macarons", image: macaron },
        { name: "Donuts", url: "donuts", image: donut },
        { name: "Croissants", url: "croissants", image: croissant },
        { name: "Pancakes", url: "pancakes", image: pancakes },
        { name: "Chocolates", url: "chocolates", image: chocolate },
        { name: "Drinks", url: "drinks", image: drinks },
        { name: "Valentines", url: "valentine", image: dishes },
    ];

    return (
        <>
            <ul className={styles["container"]}>
                {categories.map((category) => (
                    <li key={category.name} className={styles["category-li"]}>
                        <Link
                            key={category.name}
                            to={`/categories/${category.url}`}
                            className={styles["category-href"]}
                            name={category.url}
                            onClick={onClickCategoryHandler}
                        >
                            <img className={styles["category-svg"]} src={category.image} alt={category.name} />
                            {category.name}
                        </Link>
                    </li>
                ))}

            </ul>

           

        </>

    );

}