import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);

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