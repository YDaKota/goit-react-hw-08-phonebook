import { ContactForm } from 'components/Form/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations'; 
import { selectContacts, getErrorMessage, getIsLoading } from 'redux/contacts/selectors';
import { selectUserName } from 'redux/auth/selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import styles from '../components/App/App.module.css'



const PageContacts = () => {
  const loading = useSelector(getIsLoading);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  const contactsAdd = useSelector(selectContacts);
  const user = useSelector(selectUserName);
  
  useEffect(() => {
     if (user === null) return;
    dispatch(fetchContacts());
  }, [dispatch, user]);

 useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
 }, [error]);
  
  return (
    <div className={styles.container}>
      <ContactForm />
        {contactsAdd.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <ContactFilter />
          <ContactList />
        </>
      )} 
        {loading && <Loader />}
   
    </div>
  );
};
const ContactsPage = WithAuthRedirect(PageContacts, '/login');
export default ContactsPage;