import { useState } from 'react';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Button } from '@mui/material';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
        case 'name':
            setName(value);
            break;
        case 'number':
            setNumber(value);
            break;
        default:
            break;
    }};

    const handleSubmit = event => {
        event.preventDefault();

        const isRepeated = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        
        if (isRepeated) {
            alert(`${name} is already in contacts.`);
            return;
        }

        dispatch(addContact({ name, number, id: nanoid() }));
        setName('');
        setNumber('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
            <p className={styles.text}>Name:</p>
            <input
            className={styles.input}
            value={name}
            type="text"
            name="name"
            placeholder='Enter username'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            />
        </label>
        <label className={styles.label}>
            <p className={styles.text}>Phone number:</p>
            <input
            className={styles.input}
            type="tel"
            name="number"
            placeholder='(067) 111-22-33'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            />
        </label>

        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, ml: 1, color: '#fff', background: '#347474' }}
          >
            Add contact
          </Button>

        </form>
    );
}






