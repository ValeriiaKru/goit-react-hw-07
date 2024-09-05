import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

function ContactList() {
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

    return (
        <ul className={css.listContainer}>
            {filteredContacts.map((contact) => {
                return (
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        key={contact.id}
                    id={contact.id}
                    />
                );
        })}
        </ul>
    );
}

export default ContactList;