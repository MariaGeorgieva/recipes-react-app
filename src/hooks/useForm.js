import { useState } from "react";

export const useForm =(initialValues) =>{
    const [formValues, setFormvalues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormvalues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    return{
        formValues,
        onChangeHandler
    }
}