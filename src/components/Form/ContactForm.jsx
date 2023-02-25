import { useState } from 'react';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts} from 'redux/selectors';

function ContactForm () {
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
            Name
            <input
            className={styles.input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            />
        </label>
        <label className={styles.label}>
            Phone number
            <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            />
        </label>
        <button className={styles.btn} type="submit">
            Add contact
        </button>
        </form>
    );
}

export default ContactForm;




