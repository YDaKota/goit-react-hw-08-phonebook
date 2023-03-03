import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  let rendered = filter === '' ? contacts : filteredContacts();

  return (
    <ul className={styles.list}>
      {rendered.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
