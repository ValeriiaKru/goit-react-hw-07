import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

import { useDispatch } from 'react-redux';
import { addContacts } from "../../redux/contactsSlice";

function ContactForm() {
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        number: "",
    };

    const validationParams = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    });

      const handleSubmit = (values, actions) => {
          const newContact = { ...values, id: nanoid() };
          dispatch(addContacts(newContact));
          actions.resetForm();
        // onAddContact(newContact);
        // resetForm();
    };
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationParams}
        >
            <Form className={css.formContainer}>
                <label className={css.container}>
                    <span className={css.label}>Name</span>
                    <Field className={css.input} type="text" name="name" />
                    <ErrorMessage
                        className={css.errorMessage}
                        name="name"
                        component="span"
                    />
                </label>

                <label className={css.container}>
                    <span className={css.label}>Number</span>
                    <Field className={css.input} type="tel" name="number" />
                    <ErrorMessage
                        className={css.errorMessage}
                        name="number"
                        component="span"
                    />
                </label>

                <button className={css.addContactBtn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}

export default ContactForm;