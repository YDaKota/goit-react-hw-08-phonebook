import React from 'react';
import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import ContactFilter from './ContactFilter/ContactFilter';
import { useSelector } from 'react-redux';
import { selectContacts} from 'redux/selectors';

function App() {
  
  const contacts = useSelector(selectContacts);

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
