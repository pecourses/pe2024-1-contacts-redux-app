import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import CONFIGS from '../../configs';

const { IS_FAVOURITE, FULL_NAME } = CONFIGS.CONTACTS_FILTER_DEFAULT_VALUES;

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
  filter: {
    isFavourite: IS_FAVOURITE,
    fullName: FULL_NAME,
  },
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
    setFilter: (state, { payload }) => {
      state.filter = { ...state.filter, ...payload };
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { removeContact, toggleFavourite, createContact, setFilter } =
  actions;

export default reducer;
