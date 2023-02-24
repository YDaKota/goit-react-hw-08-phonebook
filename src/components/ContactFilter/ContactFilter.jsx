import React from 'react';
import styles from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';


export default function ContactFilter() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);

    return (
        <label className={styles.label}>
            <input
            className={styles.input}
            type="text"
            value={filter}
            // onChange={onChange}
            onChange={(e) => dispatch(updateFilter(e.target.value)) }
            />
        </label>
    );
}





