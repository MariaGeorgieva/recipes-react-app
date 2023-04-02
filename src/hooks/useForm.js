import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        console.log("UseForm onChangeHandler: ", e.target.value);
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
        console.log("UseForm onChangeHandler values: ", values);

    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);

        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        setValues(newValues);
    };



    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues
    }
}