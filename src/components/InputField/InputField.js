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
  minInputLength,
  min,
}) {
  const isNegative = type === 'number' && value < min;
  const isTooShort = type === 'text' && value.length < minInputLength;
  const hasError = isTooShort || isNegative || (error && touched);

  return (
    <div className={styles["input-container"]}>
      <input
        required
        min={min}
        minLength={minInputLength}
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
      {isNegative && <label className={styles['error-message']}>{label} must be greater than or equal to {min}</label>}
      {hasError && <label className={styles['error-message']}>{error}</label>}
    </div>
  );
}
