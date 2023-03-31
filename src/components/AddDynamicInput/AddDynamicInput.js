import React, { useState } from "react";

function AddDynamicInput({ initialVal, name }) {

    const [val, setVal] = useState(initialVal);

    const handleAdd = (e) => {
        // e.preventDefault();
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i, e) => {
        e.preventDefault();
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata);
    }
    const handleDelete = (i, e) => {
        e.preventDefault();
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }

    console.log(val, "data-")

    return (
        <>
            <button onClick={(e) => handleAdd(e)}>Add</button>
            {val.map((data, i) => {
                return (
                    <div>
                        <input key={i} value={data} onChange={e => handleChange(e, i)} />
                        <button onClick={(e) => handleDelete(i, e)}>x</button>
                    </div>
                )
            })}
        </>
    );
}
export default AddDynamicInput;