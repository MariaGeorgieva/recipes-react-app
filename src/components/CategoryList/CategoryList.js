import { Link } from 'react-router-dom';
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


export default function CategoryList() {
    const [selectedCategory, setSelectedCategory] = useState("Cake");

    const onClickCategoryHandler = (e) => {
        e.preventDefault();
        const currentCategory = e.target.name;
        if (currentCategory !== '') {
            setSelectedCategory(currentCategory);
        }
    }

    return (
        <>
            <ul className={styles["container"]}>

                <li className={styles["category-li"]}>
                    <Link
                        to={`/categories/${selectedCategory}`}
                        className={styles["category-href"]}
                        name="Cake"
                        onClick={onClickCategoryHandler}
                    >
                        <img className={styles["category-svg"]} src={cakes} alt="Cakes" />
                        Cakes
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link
                        className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Cupcakes"
                        onClick={onClickCategoryHandler}
                    >
                        <img className={styles["category-svg"]} src={cupcakes} alt="Cupcakes" />
                        Cupcakes
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link
                        className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Donuts"
                        onClick={onClickCategoryHandler}
                    >
                        <img className={styles["category-svg"]} src={donut} alt="Donuts" />
                        Donuts
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Macarons"
                        onClick={onClickCategoryHandler}
                    >
                        <img className={styles["category-svg"]} src={macaron} alt="Macaroons" />
                        Macaroons
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Croissant"
                        onClick={onClickCategoryHandler}
                    >
                        <img className={styles["category-svg"]} src={croissant} alt="Croissants" />
                        Croissants
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Chocolate"
                        onClick={onClickCategoryHandler}>
                        <img className={styles["category-svg"]} src={chocolate} alt="Chocolate" />
                        Chocolate
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Ice Cream"
                        onClick={onClickCategoryHandler}>
                        <img className={styles["category-svg"]} src={iceCream} alt="Ice cream" />
                        Ice cream
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="drinks"
                        onClick={onClickCategoryHandler}>
                        <img className={styles["category-svg"]} src={drinks} alt="Drinks" />
                        Drinks
                    </Link>
                </li>

                <li className={styles["category-li"]}>
                    <Link className={styles["category-href"]}
                        to={`/categories/${selectedCategory}`}
                        name="Valentine"
                        onClick={onClickCategoryHandler}
                    >
                        <img className={styles["category-svg"]} src={dishes} alt="Desserts" />
                        &hearts; Desserts
                    </Link>
                </li>


            </ul>

            <RecipeList catName={selectedCategory} title={selectedCategory}/>

        </>

    );

}