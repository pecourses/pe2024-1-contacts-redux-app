import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      fullName: 'Test',
      phoneNumber: '+380123456789',
      isFavourite: true,
    },
    {
      id: uuidv4(),
      fullName: 'Ivo',
      phoneNumber: '+380123456788',
      isFavourite: false,
    },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    // id
    removeContact: (state, { payload }) => {
      const foundContactIndex = state.contacts.findIndex(c => c.id === payload);

      if (foundContactIndex !== -1) {
        state.contacts.splice(foundContactIndex, 1);
      }
    },
    toggleFavourite: (state, { payload }) => {
      const foundContact = state.contacts.find(c => c.id === payload);
      if (foundContact) {
        foundContact.isFavourite = !foundContact.isFavourite;
      }
    },
    // values {fullName: "", phoneNumber: ""}
    createContact: (state, { payload }) => {
      state.contacts.push({
        ...payload,
        id: uuidv4(),
        isFavourite: false,
      });
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { removeContact, toggleFavourite, createContact } = actions;

export default reducer;
