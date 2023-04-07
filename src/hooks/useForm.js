import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
        setTouched(state => ({ ...state, [e.target.name]: true }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const errors = validate(values);

        console.log("onSubmit errors", errors);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        onSubmitHandler(values);

        setValues(initialValues);
        setErrors({});
        setTouched({});

    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        const errors = validate(newValues);
        console.log("changeValues",errors);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        setValues(newValues);

    };

    return {
        values,
        errors,
        touched,
        onChangeHandler,
        onSubmit,
        changeValues,

    }
}