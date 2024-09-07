import { fetchContacts } from './redux/contactsOps';
import { selectLoading } from './redux/contactsSlice';
import { useEffect } from 'react';

import './App.css';

import Loader from './components/Loader/Loader';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;