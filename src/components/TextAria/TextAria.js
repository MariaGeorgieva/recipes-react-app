import React, { useState } from 'react';
import styles from '../TextAria/TextAria.module.css';

export default function TextAria({ id = 'text', rows = 'text', cols = 'number', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles["input-container"]}>
      <textarea id={id} rows={rows} value={value} cols={cols}
        onChange={handleChange} 
        />
      <label className={value && 'filled'}
        htmlFor={label}>
        {label}
      </label>
    </div>
  );
}