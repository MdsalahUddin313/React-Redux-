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
      id: 1,
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
  },
});
export const { showContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
