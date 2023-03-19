import styles from '../CreateRecipe/CreateRecipe.module.css'

export default function StepsInputField({
    input,
    index,
    removeStepsFields,
    handleInputStepsChange
}) {

    return (
        <div className={styles["input-container-ing"]}>
            <p>{`Step ${index + 1}`}</p>
            <div className={styles["input-container"]}>
                <input
                    name='instruction'
                    value={input.instruction}
                    onChange={event => handleInputStepsChange(index, event)}
                />
                <label className={input.instruction && 'filled'} htmlFor={input.instruction}>
                    {'instruction'}
                </label>
            </div>
            <button className={styles['btn-remove']} onClick={() => removeStepsFields(index)}>remove</button>
        </div>
    )

}