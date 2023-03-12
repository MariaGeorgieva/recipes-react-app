import styles from './Buttons.module.css';

function ButtonPrimary(props) {

    return (
        <button className={styles["button-primary"]}
            onClick={props.clickHandler}
        >
            {props.value}
        </button>
    );
}

function ButtonPrimarySm(props) {

    return (
        <button className={styles["button-primary-sm"]}
            onClick={props.clickHandler}
        >
            {props.value}
        </button>
    );
}

export {
    ButtonPrimary,
    ButtonPrimarySm
}