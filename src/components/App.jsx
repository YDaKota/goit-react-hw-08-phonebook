import React from 'react';
import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import ContactFilter from './ContactFilter/ContactFilter';
import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);

  
  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }
  //   if (contacts.some(contact => contact.number === number)) {
  //     alert(`${number} is already in contacts.`);
  //     return;
  //   } else {
  //     setContacts(prevContacts => [contact, ...prevContacts]);
  //   }
  // }

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(({ id }) => id !== contactId));
  //   };
  

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };


    return (
      <Container>
        <h1>Phonebook</h1>
          <ContactForm />
        <h1>Contacts</h1>
        {contacts.length > 0 && (
          <ContactFilter />
        )}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>Please add first contact</p>
        )}
      </Container>
    );
}

export default App;
