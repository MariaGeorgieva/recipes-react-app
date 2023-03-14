import { MdCheckCircle } from 'react-icons/md'
import styles from './IngredientsList.module.css'

export default function IngredientsList({
    id,
    name,
    measures,
}) {

    return (
        <li className={styles["list-element"]}>
            <MdCheckCircle className={styles["mat-icon"]} />
            <span>{measures.metric.amount} </span>
            <span>{measures.metric.unitShort} </span>
            <span>{name}</span>
        </li>
    );
};