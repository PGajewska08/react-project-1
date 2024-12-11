import styles from './Button.module.scss';

const Button = params => {
    return (
        <button className={styles.button}>{params.children}</button>
    )
}

export default Button;