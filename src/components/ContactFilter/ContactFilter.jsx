import React from 'react';
import styles from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/contactsSlice';
import { selectFilter } from 'redux/selectors';


export default function ContactFilter() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <label className={styles.label}>
            <input
            className={styles.input}
            type="text"
            value={filter}
            onChange={(e) => dispatch(changeFilterAction(e.target.value)) }
            />
        </label>
    );
}





