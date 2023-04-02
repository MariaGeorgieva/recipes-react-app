import { useState, useEffect } from 'react';
import { useRecipeContext } from '../../contexts/RecipeContext'
import { useForm } from '../../hooks/useForm';

import styles from '../RecipeCreate/RecipeCreate.module.css'
import InputField from '../InputField/InputField';
import TextAria from '../TextAria/TextAria';
import DynamicInputField from '../RecipeCreate/DynamicInputField';
import Select from '../Select/Select'
import { ButtonPrimary } from '../Buttons/Buttons'


export default function RecipeCreate() {
    const [inputSteps, setInpuSteps] = useState([{ instruction: '' }]);

    const [inputIngredients, setInputIngredients] = useState([
        {
            quantity: '',
            ingredient: ''
        }
    ]);

    const options = [
        // { label: '', value: '' },
        { label: 'Cakes', value: 'Cake' },
        { label: 'Cupcakes', value: 'Cupcakes' },
        { label: 'Donuts', value: 'Donuts' },
        { label: 'Macarons', value: 'Macarons' },
        { label: 'Croissant', value: 'Croissant' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Ice Cream', value: 'Ice-Cream' },
        { label: 'Drinks', value: 'drinks' },
        { label: 'Desserts', value: 'Valentine' },
    ];



    // const [category, setCategory] = useState(options[0].value);

    const { onCreateRecipeSubmit } = useRecipeContext();
    const { values, onChangeHandler, onSubmit, changeValues } = useForm({
        title: '',
        image: '',
        summary: '',
        preparationMinutes: 0,
        readyInMinutes: 0,
        servings: 0,
        dishTypes: options[0].value,
        steps: inputSteps,
        extendedIngredients: inputIngredients,
    }, onCreateRecipeSubmit);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(values);

        onSubmit(e);
    }

    // // HANDLE Change Select Field
    // const handleChange = (event) => {
    //     console.log('**********************');
    //     console.log('before handle:', category);
    //     // console.log('Label 👉️', event.target.selectedOptions[0].label);
    //     console.log('target 👉️', event.target.value);
    //     console.log("currentTarget", event.currentTarget.value)
    //     const currentSelect = event.currentTarget.value
    //     setCategory(currentSelect);
    //     console.log('values.dishTypes ', values.dishTypes  );
    //     console.log('after handle:', category);
    //     console.log('**********************');
    // };


    // HANDLE Change Dynamic Input Fields
    const handleDynamicInputChange = (index, e) => {

        if (e.target.name === "instruction") {
            let data = [...inputSteps];
            data[index][e.target.name] = e.target.value;
            setInpuSteps(data);
        }

        else if (e.target.name === "ingredient") {
            let data = [...inputIngredients];
            data[index][e.target.name] = e.target.value;
            setInputIngredients(data);
        }
        else if (e.target.name === "quantity") {
            let data = [...inputIngredients];
            data[index][e.target.name] = e.target.value;
            setInputIngredients(data);
        }
    }

    // ADD new Dynamic Input Fields
    const addDynamicInputField = (e) => {
        e.preventDefault();
        if (e.target.name === "stepsBtn") {
            let newfield = { instruction: '' }
            setInpuSteps([...inputSteps, newfield])
            values.steps.push(newfield);
        } else if (e.target.name === "ingredientsBtn") {
            let newfield = { quantity: '', ingredient: '' }
            setInputIngredients([...inputIngredients, newfield]);
            values.extendedIngredients.push(newfield);
        }

    }

    // REMOVE Dynamic Input Fields
    const removeDynamicInputFields = (index, e) => {
        e.preventDefault();

        if (e.target.name === 'stepsRemove') {
            let data = [...inputSteps];
            data.splice(index, 1);
            setInpuSteps(data);
        } else if (e.target.name === 'ingredientRemove') {
            let data = [...inputIngredients];
            data.splice(index, 1);
        }
    }

    // useEffect(() => {
    //     console.log("values.dishTypes", values.dishTypes)
    // }, [values.dishTypes])

    return (
        <div className={styles["container"]}>
            <div id={"create-recipe"} className={`${styles['container-form']} ${styles.login}`} >
                <div className={styles["container-form-column"]}>
                    <h2 className={styles["title"]}>Create a New Recipe</h2>

                    <form onSubmit={onSubmitHandler} id="create" method="post"  >
                        <div className={styles["form"]}>
                            <div>
                                <div>
                                    <Select
                                        name="dishTypes"
                                        label="Category"
                                        options={options}
                                        value={values.dishTypes}
                                        onChangeHandler={onChangeHandler}
                                    />

                                </div>
                                <InputField label="Title*" name="title" type="text"
                                    value={values.title}
                                    onChangeHandler={onChangeHandler}
                                />
                                <InputField label="Image URL*" name="image" type="text"
                                    value={values.image}
                                    onChangeHandler={onChangeHandler}
                                />

                            </div>
                            <TextAria name="summary" label="Summary" id={'summary'} rows={11} cols={40}
                                value={values.summary}
                                onChangeHandler={onChangeHandler}
                            />
                            <div>
                                <InputField label="Preparaion Time* (minutes)" name="preparationMinutes" type={'number'}
                                    value={values.preparationMinutes}
                                    onChangeHandler={onChangeHandler} />
                                <InputField label="Cook Time* (minutes)" name="readyInMinutes" type={'number'}
                                    value={values.readyInMinutes}
                                    onChangeHandler={onChangeHandler} />
                                <InputField label="Servings*" name="servings" type={'number'}
                                    value={values.servings}
                                    onChangeHandler={onChangeHandler} />
                            </div>

                            <div className={styles["wrapper"]}>
                                <h3 className={styles["title-ing"]}>Ingredients List*</h3>
                                {inputIngredients.map((input, index) => {
                                    return (
                                        <div key={`${index}IngredientList`} className={styles["input-container-ing"]}>
                                            <div className={styles["input-container"]}>
                                                <DynamicInputField className={styles["quantity"]}
                                                    label='qty'
                                                    name='quantity'
                                                    value={`${input['quantity']}`}
                                                    key={`${index}quantity`}
                                                    index={index}
                                                    handleDynamicInputChange={handleDynamicInputChange}
                                                    onChangeHandler={onChangeHandler}
                                                />
                                            </div>
                                            <div className={styles["input-container"]}>
                                                <DynamicInputField
                                                    label='ingredient'
                                                    name='ingredient'
                                                    key={`${index}ingredient`}
                                                    index={index}
                                                    value={`${input['ingredient']}`}
                                                    handleDynamicInputChange={handleDynamicInputChange}
                                                    onChangeHandler={onChangeHandler}
                                                />
                                            </div>
                                            <button className={styles['btn-remove']} onClick={(e) => removeDynamicInputFields(index, e)} name="ingredientRemove">Remove</button>
                                        </div>
                                    )
                                })}
                                <p className={styles["info"]}>*Enter one ingredient at a time.</p>
                                <button className={styles['btn-add']} onClick={addDynamicInputField} name="ingredientsBtn"> + Add Ingredient</button>
                            </div>

                            {/* Method Dynamic List */}
                            <div className={styles["wrapper"]}>
                                <h3 className={styles["title-ing"]}>Method*</h3>
                                <div name="steps">
                                    {inputSteps.map((input, index) => {

                                        return (
                                            <div key={`${index}Instruction`} className={styles["input-container-ing"]}>
                                                <p className={styles["steps"]}>{`Step ${index + 1}`}</p>
                                                <DynamicInputField
                                                    label='Instruction'
                                                    name='instruction'
                                                    key={`${index}instruction`}
                                                    index={index}
                                                    value={`${input['instruction']}`}
                                                    handleDynamicInputChange={handleDynamicInputChange}
                                                    onChangeHandler={onChangeHandler}
                                                />
                                                <button className={styles['btn-remove']} onClick={(e) => removeDynamicInputFields(index, e)} name="stepsRemove">remove</button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className={styles["info"]}>*Enter one step at a time.</p>
                                <button className={styles['btn-add']} onClick={addDynamicInputField} name="stepsBtn"> + Add Step</button>
                            </div>
                        </div>
                        <ButtonPrimary type="submit" value={'Create Recipe'} />
                    </form>
                </div>
            </div >
        </div >
    );


}