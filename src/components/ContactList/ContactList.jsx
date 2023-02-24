import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
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
}



export default ContactList;