import { MdAddTask } from 'react-icons/md'
import styles from '../IngredientsList/IngredientsList.module.css'

export default function StepList({
    instruction,
}) {

    return (
        <li className={styles["list-element"]}>
            <MdAddTask className={styles["mat-icon"]} />
            <span>{instruction} </span>

        </li>
    );
};