import { useState, useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { useForm } from '../../hooks/useForm';

import styles from '../RecipeCreate/RecipeCreate.module.css'
import InputField from '../InputField/InputField';
import FormProvider from '../FormProvider/FormProvider';

export default function DynamicArrayFields({
    name,
    label,
    value,
    newfieldName

}) {

    const [inputSteps, setInpuSteps] = useState(value);

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    // const { onChangeHandler } = useForm();
    // HANDLE Change Dynamic Input Fields
    const handleDynamicInputChange = (index, e) => {
        let data = [...inputSteps];
        data[index][e.target.name] = e.target.value;
        //  handleFormChange(data);
        // onChangeHandler(inputSteps)
    }

    // ADD new Dynamic Input Fields
    const addDynamicInputField = (e) => {
        e.preventDefault();
        let newfield = {};
        setInpuSteps([...inputSteps, newfield]);
    }


    // REMOVE Dynamic Input Fields
    const removeDynamicInputFields = (index, e) => {
        e.preventDefault();
        let data = [...inputSteps];
        data.splice(index, 1);
        setInpuSteps(data);
    }

    console.log("Dynami inputSteps", inputSteps);

    return (
        <div className={styles["wrapper"]}>
            <h3 className={styles["title-ing"]}>Method*</h3>
            <div name="steps">
                {inputSteps.map((input, index) => {
                    return (
                             <div key={`${index}${newfieldName}`} className={styles["input-container-ing"]}>
                                <p className={styles["steps"]}>{`Step ${index + 1}`}</p>

                                <div className={styles["input-container"]}>
                                    <input
                                        type="text"
                                        value={form[name][index]}
                                        label={label}
                                        // name={name[index]}
                                        key={`${index}key`}
                                        index={index}
                                        onChange={(e) => handleDynamicInputChange(index, e)}
                                    />
                                    <label className={'filled'} htmlFor={label}>
                                        {label}
                                    </label>
                                </div>
                                <button className={styles['btn-remove']} onClick={(e) => removeDynamicInputFields(index, e)} name="stepsRemove">remove</button>
                            </div>
    
                    )
                })}
            </div>
            <button className={styles['btn-add']} onClick={(e) => addDynamicInputField(e)} name="stepsBtn"> + Add Step</button>
            <p className={styles["info"]}>*Enter one step at a time.</p>
        </div>
    )

}