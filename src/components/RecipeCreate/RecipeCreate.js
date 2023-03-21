import { useState } from 'react';
import Form from '../Auth/Form';
import InputField from '../InputField/InputField';
// import { ButtonPrimary } from '../Buttons/Buttons'
import TextAria from '../TextAria/TextAria';
// import {Logo} from './Logo'

import styles from '../RecipeCreate/RecipeCreate.module.css'
import DynamicInputField from '../RecipeCreate/DynamicInputField';


export default function RecipeCreate() {
    const [inputSteps, setInpuSteps] = useState([{ instruction: '' }]);
    const [inputIngredients, setInputIngredients] = useState([
        {
            quantity: '',
            ingredient: ''
        }
    ]);

    const initialValues = {
        title: '',
        imgUrl: '',
        summary: '',
        prepTime: 0,
        cookTime: 0,
        servings: 0,
        steps: [],
        ingredients: [],
    };

    const onSubmitHandler = (form) => {
        form.steps = inputSteps;
        form.ingredients = inputIngredients;
        console.log("Form input: ", form);
        console.log("Form steps: ", form.steps);
        console.log("Form ingredients: ", form.ingredients);
    }

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
        } else if (e.target.name === "ingredientsBtn") {
            let newfield = { quantity: '', ingredient: '' }
            setInputIngredients([...inputIngredients, newfield])
        }

    }

    const removeDynamicInputFields = (index, e) => {
        e.preventDefault();

        if (e.target.name === 'stepsRemove') {
            let data = [...inputSteps];
            data.splice(index, 1);
            setInpuSteps(data);
        } else if (e.target.name === 'ingredientRemove') {
            let data = [...inputIngredients];
            data.splice(index, 1);
            setInputIngredients(data);
        }
    }

    return (
        <div className={styles["container"]}>

            {/* <div id={"login"} className={styles["container-form"]}> */}
            <div id={"create-recipe"} className={`${styles['container-form']} ${styles.login}`} >
                <div className={styles["container-form-column"]}>

                    <h2 className={styles["title"]}>Create a New Recipe</h2>
                    {/* <form action="/register" method='POST'> */}
                    <Form submit={onSubmitHandler} initialValues={initialValues}>
                        <div className={styles["form"]}>
                            <div>
                                <InputField label="Title*" name="title" type="text" />
                                <InputField label="Image URL*" name="imgUrl" type="imgUrl" />
                            </div>
                            <TextAria name="summary" label="Summary" id={'summary'} rows={11} cols={40} />
                            <div>
                                <InputField label="Preparaion Time* (minutes)" name="prepTime" type={'number'} />
                                <InputField label="Cook Time* (minutes)" name="cookTime" type={'number'} />
                                <InputField label="Servings*" name="servings" type={'number'} />
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
                                                    key={`${index}quantity`}
                                                    index={index}
                                                    handleDynamicInputChange={handleDynamicInputChange}
                                                />
                                            </div>
                                            <div className={styles["input-container"]}>
                                                <DynamicInputField
                                                    label='ingredient'
                                                    name='ingredient'
                                                    key={`${index}ingredient`}
                                                    index={index}
                                                    handleDynamicInputChange={handleDynamicInputChange}
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
                                                    handleDynamicInputChange={handleDynamicInputChange}
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
                    </Form>
                </div>
            </div >
        </div >
    );


}