import styles from '../InputField/InputField.module.css';

export default function InputField({
  id,
  name,
  value,
  label,
  type,
  onChangeHandler

}) {

  return (
    <div className={styles["input-container"]}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />

      <label className={'filled'} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}