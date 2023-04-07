import styles from '../InputField/InputField.module.css';

export default function InputField({
  id,
  name,
  value,
  label,
  type,
  onChangeHandler,
  error,
  touched,
  minInputLength

}) {
  const isTooShort = value && value.length < minInputLength;
  const isNegative = value  < minInputLength;
  const hasError = isTooShort || (error && touched);


  return (
    <div className={styles["input-container"]}>
      <input
        required
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
        className={hasError ? `${styles['error-message']}` : ''}
      />

      <label className={styles['filled']} htmlFor={label}>
        {label}
      </label>
      {isTooShort && <label className={styles['error-message']}>{label} must be at least {minInputLength} characters long</label>}
      {hasError && <div className={styles['error-message']}>{error}</div>}




    </div>
  );
}