import styles from '../RecipeCreate/RecipeCreate.module.css'

export default function DynamicInputField({
    label,
    index,
    name,
    type,
    handleDynamicInputChange,
    value
}) {

    
    return (
        <div className={styles["input-container-ing"]}>
            <div className={styles["input-container"]}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={event => handleDynamicInputChange(index, event)}

                />
                <label className={'filled'} htmlFor={name}>
                    {label}
                </label>
            </div>
        </div>
    )

}