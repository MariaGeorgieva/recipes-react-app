import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeContext } from '../../contexts/RecipeContext'

import { useForm } from '../../hooks/useForm';
import { useService } from "../../hooks/useService";
import { recipeServiceFactory } from '../../services/recipeService';

import FormProvider from '../FormProvider/FormProvider';
import InputField from '../InputField/InputField';
import TextAria from '../TextAria/TextAria';
import styles from '../RecipeCreate/RecipeCreate.module.css'
import DynamicInputField from '../RecipeCreate/DynamicInputField';


export default function RecipeEdit() {

    const [inputSteps, setInpuSteps] = useState([{ instruction: '' }]);
    const [inputIngredients, setInputIngredients] = useState([
        {
            quantity: '',
            ingredient: ''
        }
    ]);
    const { onRecipeEditSubmit } = useRecipeContext();
    const { recipeId } = useParams();
    const recipeService = useService(recipeServiceFactory)
    const { formValues, onChangeHandler, changeValues } = useForm({
        title: '',
        image: '',
        summary: '',
        dishTypes: '',
        preparationMinutes: 0,
        readyInMinutes: 0,
        servings: 0,
        steps: [],
        extendedIngredients: [],
    }, onRecipeEditSubmit);


    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result);
            });
    }, [recipeId]);

    const onSubmitHandler = async (form) => {
        form.steps = inputSteps;
        form.ingredients = inputIngredients;
        console.log("Form input: ", form);
        onRecipeEditSubmit(form);
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
            setInputIngredients(data);
        }
    }

    console.log('formValues', formValues)
    console.log('changeValues', changeValues)
    return (
        <div className={styles["container"]}>

            <div id={"create-recipe"} className={`${styles['container-form']} ${styles.login}`} >
                <div className={styles["container-form-column"]}>

                    <h2 className={styles["title"]}>Edit Recipe</h2>

                    <FormProvider id="edit" method="post" btnName={'Edit Recipe'}
                        // initialValues={initialValues}
                        submit={onSubmitHandler}
                        onChange={onChangeHandler}
                    >
                        <div className={styles["form"]}>
                            <div>
                                <InputField label="Title*" name="title" type="text" />
                                <InputField label="Image URL*" name="image" type="text" />
                                {/* TODO array strings */}
                                <InputField label="Category*" name="dishTypes" type="text" />
                            </div>
                            <TextAria name="summary" label="Summary" id={'summary'} rows={11} cols={40} />
                            <div>
                                <InputField label="Preparaion Time* (minutes)" name="preparationMinutes" type={'number'} />
                                <InputField label="Cook Time* (minutes)" name="readyInMinutes" type={'number'} />
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
                    </FormProvider>
                </div>
            </div >
        </div >
    );


}