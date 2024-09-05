import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    contacts: {
        items: [],
},
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    reducers: {
        addContacts: (state, action) => {
            state.contacts.items.push(action.payload);
        },
        deleteContacts: (state, action) => {
            state.contacts.items = state.contacts.items.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.contacts.items;