import { useState } from 'react';
import InputField from './InputField';
import { ButtonPrimary } from './Buttons'
import TextAria from './TextAria';
// import {Logo} from './Logo'

import styles from './CreateRecipe.module.css'


export default function CreateRecipe() {

    const [inputIngredients, setInputIngredients] = useState([
        {
            quantity: '',
            ingredient: ''
        }
    ]);
    const [inputSteps, setInpuSteps] = useState([{ instruction: '' }
    ]);

    const submit = (e) => {
        e.preventDefault();
        console.log('Ingr:')
        console.log(inputIngredients)
        console.log('Steps:')
        console.log(inputSteps)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // TODO
        console.log("Click Login");
    }

    const handleInputIngredientsChange = (index, event) => {
        let data = [...inputIngredients];
        data[index][event.target.name] = event.target.value;
        setInputIngredients(data);
    }

    const handleInputStepsChange = (index, event) => {
        let data = [...inputSteps];
        data[index][event.target.name] = event.target.value;
        setInpuSteps(data);
    }


    const addIngredientField = () => {
        let newfield = { quantity: '', ingredient: '' }
        setInputIngredients([...inputIngredients, newfield])

    }

    const addStepsField = () => {
        let newfield = { instruction: '' }
        setInpuSteps([...inputSteps, newfield])

    }

    const removeIngredientsFields = (index) => {
        let data = [...inputIngredients];
        data.splice(index, 1)
        setInputIngredients(data)
    }

    const removeStepsFields = (index) => {
        let data = [...inputSteps];
        data.splice(index, 1)
        setInpuSteps(data)
    }

    return (
        <div className={styles["container"]}>

            {/* <div id={"login"} className={styles["container-form"]}> */}
            <div id={"create-recipe"} className={`${styles['container-form']} ${styles.login}`} >
                <div className={styles["container-form-column"]}>

                    <h2 className={styles["title"]}>Create a New Recipe</h2>
                    {/* <form action="/register" method='POST'> */}
                    <form action="/" className={styles["form"]} onSubmit={submit}>
                        <div className={styles["form"]}>
                            <div>
                                <InputField label="Title*" type={'text'} />
                                <InputField label="Image URL*" type={'text'} />
                                {/* <InputField label="Category*" type={'text'} /> */}


                                <div className={styles["input-container"]}>
                                    <select name="category" id="category">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    {/* <label for="cars">Choose a car:</label> */}
                                    <label className={'filled'} htmlFor={"category"}>
                                        {'Category'}
                                    </label>
                                </div>
                            </div>

                            <TextAria label="Summary" id={'summary'} rows={11} cols={40} />

                            <div>
                                <InputField label="Preparaion Time* (minutes)" type={'number'} />
                                <InputField label="Cook Time* (minutes)" type={'number'} />
                                <InputField label="Servings*" type={'number'} />
                            </div>

                            <div className={styles["wrapper"]}>
                                <h3 className={styles["title-ing"]}>Ingredients List*</h3>
                                {inputIngredients.map((input, index) => {
                                    return (
                                        <div key={index} className={styles["input-container-ing"]}>
                                            <div className={styles["input-container"]}>
                                                <input className={styles["quantity"]}
                                                    name='quantity'
                                                    value={input.quantity}
                                                    onChange={event => handleInputIngredientsChange(index, event)}
                                                />

                                                <label className={input.quantity && 'filled'} htmlFor={input.quantity}>
                                                    {'quantity'}
                                                </label>
                                            </div>
                                            <div className={styles["input-container"]}>
                                                <input
                                                    name='ingredient'
                                                    value={input.ingredient}
                                                    onChange={event => handleInputIngredientsChange(index, event)}
                                                />
                                                <label className={input.ingredient && 'filled'} htmlFor={input.ingredient}>
                                                    {'ingredient'}
                                                </label>
                                            </div>
                                            <button className={styles['btn-remove']} onClick={() => removeIngredientsFields(index)}>Remove</button>
                                        </div>
                                    )
                                })}

                                <p className={styles["info"]}>*Enter one ingredient at a time.</p>
                                <button className={styles['btn-add']} onClick={addIngredientField} > + Add Ingredient</button>
                            </div>
                            {/* <hr /> */}
                            <div className={styles["wrapper"]}>
                                <h3 className={styles["title-ing"]}>Method*</h3>
                                {inputSteps.map((input, index) => {
                                    return (
                                        <div key={index} className={styles["input-container-ing"]}>
                                            <p>{`Step ${index + 1}`}</p>
                                            <div className={styles["input-container"]}>
                                                <input
                                                    name='instruction'
                                                    // placeholder='instruction'
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
                                })}
                                <p className={styles["info"]}>*Enter one step at a time.</p>
                                <button className={styles['btn-add']} onClick={addStepsField} > + Add Step</button>
                            </div>

                            {/* <button onClick={submit}>Submit</button> */}
                        </div>
                        <div className={styles["wrapper"]}>
                            < ButtonPrimary value={'Create My Recipe'} type={'submit'} />
                        </div>
                    </form>
                </div>

            </div >
        </div >
    );


}