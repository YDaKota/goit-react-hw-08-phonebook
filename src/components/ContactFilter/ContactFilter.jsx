import React from 'react';
import styles from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';


export const ContactFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <label className={styles.label}>
            <input
            className={styles.input}
            type="text"
            value={filter}
            placeholder="Search contacts"
            onChange={(e) => dispatch(changeFilterAction(e.target.value)) }
            />
        </label>
    );
}





