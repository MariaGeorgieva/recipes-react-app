import { MdCheckCircle } from 'react-icons/md'
import styles from './IngredientsList.module.css'

export default function IngredientsList({
    name,
    quantity,
    ingredient
}) {

    return (
        <li className={styles["list-element"]}>
            <MdCheckCircle className={styles["mat-icon"]} />
            <span>{quantity} </span>
            <span>{ingredient} </span>
            <span>{name}</span>
        </li>
    );
};