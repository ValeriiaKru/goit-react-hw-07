import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css';

import { deleteContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteContacts(id));
    };

    return (
        <li className={css.contactList}>
            <div className={css.contactContainer}>
                <FaUser />
                <p>{name}</p>
            </div>
            <div className={css.contactContainer}>
                <FaPhoneAlt />
                <p>{number}</p>
            </div>
            <button
            className={css.deleteBtn}
            type="button"
            onClick={() => handleDelete(id)}
            >
Delete
            </button>
        </li>
    );
}

export default Contact;