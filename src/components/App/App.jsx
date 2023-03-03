import { useEffect, lazy, Suspense } from 'react';
// import ContactForm from '../Form/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Container from '../Container/Container';
// import ContactFilter from '../ContactFilter/ContactFilter';
import { useSelector, useDispatch } from 'react-redux';
import { getErrorMessage } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';
import { fetchCurrentUser } from 'redux/auth/operation';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';


const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const Page404 = lazy(() => import('pages/Page404'));

function App() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getErrorMessage);
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (errorMessage) {
      toast.error('Oops. Something is wrong!');
    }
 }, [errorMessage]);

    return (
      <div className={styles.main}>
      <AppBar />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      )}
         <ToastContainer
            position="top-center"
            autoClose={5000}
            closeOnClick
            theme="colored" 
       />
    </div>
    );
}

export default App;
