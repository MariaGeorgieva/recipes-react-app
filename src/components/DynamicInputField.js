// import { useState } from "react";

// export default function DynamicInputField({
//     type = 'text',
//     name = 'text',
//     label
// }) {
//     const [inputIngredients, setInputIngredients] = useState([{}])

//     const handleFormChange = (index, event) => {
//         let data = [...inputIngredients];
//         data[index][event.target.name] = event.target.value;
//         setInputIngredients(data);
//     }


//     const removeFields = (index) => {
//         let data = [...inputIngredients];
//         data.splice(index, 1)
//         setInputIngredients(data)
//     }
//     return (
//         <div key={index}>
//             <input
//                 type={type}
//                 name={name}
//                 // value={input.name}
//                 onChange={handleFormChange}
//             />
//             <label className={value && 'filled'} htmlFor={label}>
//                 {label}
//             </label>
//             <button onClick={() => removeFields(index)}>Remove</button>
//         </div>

//     )
// }