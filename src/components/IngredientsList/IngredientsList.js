import { MdCheckCircle } from 'react-icons/md'
import styles from './IngredientsList.module.css'

export default function IngredientsList({
    id,
    name,
    ingredients,
}) {

    return (
        <li className={styles["list-element"]}>
            <MdCheckCircle className={styles["mat-icon"]} />
            <span>{ingredients?.quantity} </span>
            <span>{ingredients?.ingredient} </span>
            <span>{name}</span>
        </li>
    );
};