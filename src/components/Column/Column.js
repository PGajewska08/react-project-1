import styles from './column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';

const Column = props => {
    props.action({ title: props.title }, props.columnId);
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    );
};

export default Column;