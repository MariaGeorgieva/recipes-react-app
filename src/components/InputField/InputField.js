// import React, { useState } from 'react';
import styles from '../InputField/InputField.module.css';
import { useContext } from 'react';
import { FormContext } from '../Auth/Form';
// export default function TextInput({ type = 'text', label,  }) {
//   const [value, setValue] = useState('');

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   return (
//     <div className={styles["input-container"]}>
//       <input type={type} value={value} onChange={handleChange} />
//       <label className={value && 'filled'} htmlFor={label}>
//         {label}
//       </label>
//     </div>
//   );
// }


export default function InputField(props) {
  const {
    label,
    type = 'text',
    name,
  } = props;


  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className={styles["input-container"]}>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
      />
      <label className={'filled'} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}