import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
const ColumnForm = params => {
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        params.action({ 
            title: value,
            icon: icon
         });
        setValue('');
        setIcon('');
    }
    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title:<TextInput value={value} onChange={e => setValue(e.target.value)} /> 
            Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add Column</Button>
        </form>
    );
};

export default ColumnForm;
