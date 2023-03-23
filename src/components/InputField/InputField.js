// import React, { useState } from 'react';
import styles from '../InputField/InputField.module.css';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';


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