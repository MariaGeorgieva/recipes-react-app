import { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';
import styles from '../TextAria/TextAria.module.css';

export default function TextAria(props) {
  const {
    id,
    rows,
    cols,
    label,
    name
  } = props

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className={styles["input-container"]}>
      <textarea
        id={id}
        rows={rows}
        cols={cols}
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
