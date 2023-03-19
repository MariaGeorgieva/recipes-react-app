import React, { useState } from 'react';
import styles from '../Buttons/Buttons.module.css'

export const FormContext = React.createContext({
    form: {}
});

export default function Form(props) {
    const { children, submit = () => { }, initialValues } = props;

    const [form, setForm] = useState(initialValues);

    const handleFormChange = (event) => {
        // Get the name of the field that caused this change event
        // Get the new value of this field
        const { name, value } = event.target;

        // Update state
        // Assign new value to the appropriate form field
        setForm({
            ...form,
            [name]: value
        });

    };

    return (
        <form className="form">
            <FormContext.Provider value={{
                form,
                handleFormChange
            }}>
                {children}
            </FormContext.Provider>
            <button className={styles["button-primary"]} type="button" onClick={() => submit(form)}>
                Submit
            </button>
        </form>
    );
}