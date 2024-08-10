import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: 1, fullName: "Test", phoneNumber: "+380123456789" },
    { id: 2, fullName: "Ivo", phoneNumber: "+380123456788" },
  ],
};

const contactsSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
});

const { reducer } = contactsSlice;

export default reducer;
