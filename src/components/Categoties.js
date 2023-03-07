import styles from './Categories.module.css'
import cakes from '../assets/cake2.svg'
import iceCream from '../assets/ice-cream.svg'
import muffin from '../assets/muffin.svg'
import macaron from '../assets/macaron.svg'
import donut from '../assets/donut.svg'
import croissant from '../assets/croissant2.svg'
import chocolate from '../assets/chocolate.svg'
import drinks from '../assets/coffee.svg'
import dishes from '../assets/dinner-table.svg'

export default function Categories() {

    return (

        <ul className={styles["container"]}>
            <li className={styles["category-li"]}>
                <a href="http:/category/cakes" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={cakes} alt="Cakes" />Cakes</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={muffin} alt="Cupcakes" />Cupcakes</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={donut} alt="Donuts" />Donuts</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={macaron} alt="Macaroons" />Macaroons</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={croissant} alt="Croissants" />Croissants</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={chocolate} alt="Chocolate" />Chocolate</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/ice-cream" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={iceCream} alt="Ice cream" />Ice cream</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={drinks} alt="Drinks" />Drinks</a>
            </li>

            <li className={styles["category-li"]}>
                <a href="http:/category/muffins" className={styles["category-href"]}>
                    <img className={styles["category-svg"]} src={dishes} alt="Drinks" />Dishes</a>
            </li>


        </ul>


    );
}