import styles from '../Select/Select.module.css';
// import { useState } from 'react';
export default function Select({
    label,
    value,
    options,
    name,
    onChangeHandler
    

}) {
    // const [category, setCategory] = useState(options[0].value);
    // HANDLE Change Select Field
    // const handleChange = (event) => {
    //     console.log('**********************');
    //     console.log('before handle:', category);
    //     // console.log('Label 👉️', event.target.selectedOptions[0].label);
    //     console.log('target 👉️', event.target.value);
    //     console.log("currentTarget", event.currentTarget.value)
    //     const currentSelect = event.currentTarget.value
    //     setCategory(currentSelect);
    //     // console.log('values.dishTypes ', values.dishTypes  );
    //     console.log('after handle:', category);
    //     console.log('**********************');
    // };

    return (
        <div className={styles["input-container"]}>
            <select className={styles["option"]}
                value={value}
                // onChange={handleChange}
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