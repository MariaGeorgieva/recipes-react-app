
import styles from '../TextAria/TextAria.module.css';

export default function TextAria({
  id,
  rows,
  cols,
  label,
  name,
  value,
  onChangeHandler
}) {
  
  return (
    <div className={styles["input-container"]}>
      <textarea
        id={id}
        rows={rows}
        cols={cols}
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
