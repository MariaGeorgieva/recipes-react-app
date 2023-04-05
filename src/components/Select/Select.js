import styles from '../Select/Select.module.css';

export default function Select({
    label,
    value,
    options,
    name,
    onChangeHandler
}) {

    return (
        <div className={styles["input-container"]}>
            <select className={styles["option"]}
                value={value}
                onChange={onChangeHandler}
                name={name}
                id={name}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label className={'filled'} htmlFor={name}>
                {label}
            </label>
        </div>
    );
};