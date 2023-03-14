import React, { useState } from 'react';
import styles from './InputField.module.css';

export default function TextInput({ type = 'text', label,  }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles["input-container"]}>
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}