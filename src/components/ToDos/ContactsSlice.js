import { createSlice } from "@reduxjs/toolkit";

const initialStateContacts = {
  contacts: [
    {
      id: 1,
      name: "Nabid",
      contactNum: "01245687",
      createdAt: "2.5.2022 GMT 6:00",
    },
    {
      id: 2,
      name: "Sanaullah",
      contactNum: "07896423",
      createdAt: "12.5.2022 GMT 9:00",
    },
  ],
};

export const contactsSlice = createSlice({
  name: "contact-list",
  initialState: initialStateContacts,
  reducers: {
    showContacts: (state) => state,
    addContacts: (state, actions) => {
      state.contacts.push(actions.payload);
    },
    deleteContacts: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
    editContacts: (state, action) => {
      state.contacts = state.contacts(action.payload);
    },
  },
});
export const { showContacts, addContacts, editContacts, deleteContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;
