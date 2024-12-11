import styles from './column.module.scss';

const Column = params => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + params.icon}></span>{params.title}</h2>
        </article>
    );
};

export default Column;