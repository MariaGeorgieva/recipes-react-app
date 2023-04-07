import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeContext } from '../../contexts/RecipeContext'

import { useForm } from '../../hooks/useForm';
import { useService } from "../../hooks/useService";
import { recipeServiceFactory } from '../../services/recipeService';

import styles from '../RecipeCreate/RecipeCreate.module.css'
import { options } from '../formElements/options';
import InputField from '../InputField/InputField';
import Select from '../Select/Select';
import TextAria from '../TextAria/TextAria';
import DynamicInputField from '../RecipeCreate/DynamicInputField';
import { ButtonPrimary } from '../Buttons/Buttons';


export default function RecipeEdit() {
    const [inputSteps, setInpuSteps] = useState([{ instruction: '' }]);

    const [inputIngredients, setInputIngredients] = useState([
        {
            quantity: '',
            ingredient: ''
        }
    ]);

    const [category, setCategory] = useState(options[0]);
    const { onRecipeEditSubmit } = useRecipeContext();
    const { recipeId } = useParams();

    const validate = (values) => {
        const errors = {};
        const touched = {};

        if (!values.title) {
            errors.title = "Title is required";
        } else if ((values.title.length < 4) || (touched.title)) {
            errors.title = "Title must be at least 4 characters long";
        }

        if (!values.image) {
            errors.image = "Image url is required";
        } else if (!(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/).test(values.image)) {
            errors.image = "Image url must be valid";
        }

        return errors;
    };

    const recipeService = useService(recipeServiceFactory)
    const { values, errors, touched, onChangeHandler, changeValues, onSubmit } = useForm({
        title: '',
        image: '',
        summary: '',
        dishTypes: category,
        preparationMinutes: 0,
        readyInMinutes: 0,
        servings: 0,
        steps: inputSteps,
        extendedIngredients: inputIngredients,
    }, onRecipeEditSubmit, validate);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result);
                setInpuSteps(result.steps);
                setInputIngredients(result.extendedIngredients);
                setCategory(result.dishTypes);
                // console.log('result.dishTypes', result.dishTypes);
            });
    }, [recipeId]);



    const onSubmitHandler = async (e) => {
        e.preventDefault();
        onSubmit(e);
    }

    // HANDLE Change Select Field
    const handleChange = (event) => {
        setCategory(event.target.value);
    };


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
            setInpuSteps([...inputSteps, newfield]);
            values.steps.push(newfield);
        } else if (e.target.name === "ingredientsBtn") {
            let newfield = { quantity: '', ingredient: '' }
            setInputIngredients([...inputIngredients, newfield])
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
            values.steps.splice(index, 1)
        } else if (e.target.name === 'ingredientRemove') {
            let data = [...inputIngredients];
            data.splice(index, 1);
            setInputIngredients(data);
            values.extendedIngredients.splice(index, 1)
        }
    }

    return (
        <div className={styles["container"]}>

            <div id={"create-recipe"} className={`${styles['container-form']} ${styles.login}`} >
                <div className={styles["container-form-column"]}>

                    <h2 className={styles["title"]}>Edit Recipe</h2>

                    <form onSubmit={onSubmitHandler} id="create" method="PUT"  >
                        <div className={styles["form"]}>
                            <div>
                                <InputField
                                    id="title"
                                    name="title"
                                    label="Title*"
                                    type="text"
                                    value={values.title}
                                    onChangeHandler={onChangeHandler}
                                    error={errors.title}
                                    touched={touched.title}
                                    minInputLength='4' />

                                <InputField label="Image URL*" name="image" type="url"
                                    value={values.image}
                                    onChangeHandler={onChangeHandler}
                                    error={errors.image}
                                    touched={touched.image}
                                />
                                <div>
                                    <Select
                                        name="dishTypes"
                                        label="Category"
                                        options={options}
                                        value={values.dishTypes}
                                        onChangeHandler={onChangeHandler}
                                    />
                                </div>
                            </div>
                            <TextAria name="summary" label="Summary" id={'summary'} rows={11} cols={40}
                                value={values.summary}
                                onChangeHandler={onChangeHandler} />
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
                        <ButtonPrimary type="submit" value={'Edit Recipe'} />
                        <ButtonPrimary type="text" value={'Cancel'} />

                    </form>
                </div>
            </div >
        </div >
    );


}