import { useContext } from 'react';
import { FormContext } from '../Auth/Form';
import styles from '../RecipeCreate/RecipeCreate.module.css'

export default function DynamicInputField({
    label,
    index,
    name,
    type = 'text',
    handleDynamicInputChange
}) {
    const formContext = useContext(FormContext);
    const { form } = formContext;
    return (
        <div className={styles["input-container-ing"]}>
            <div className={styles["input-container"]}>
                <input
                    type={ type}
                    name={name}
                    value={form[name]}
                    onChange={event => handleDynamicInputChange(index, event)}

                />
                <label className={'filled'} htmlFor={name}>
                    {label}
                </label>
            </div>
        </div>
    )

}