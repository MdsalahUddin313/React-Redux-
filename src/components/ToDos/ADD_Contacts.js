import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContacts } from "./ContactsSlice";
const ADD_Contacts = () => {
  const [name, setName] = useState("");
  const [contactNum, setcontactNum] = useState("");
  const navigate = useNavigate();
  const numberOfContacts = useSelector(
    (state) => state.contactsList.contacts.length
  );
  const dispatch = useDispatch();
  //console.log(numberOfContacts);
  //console.log({ name, contactNum });
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    const createdAt = timestamp.toString();
    const contactList = {
      id: numberOfContacts + 1,
      name,
      contactNum,
      createdAt,
    };
    dispatch(addContacts(contactList));
    console.log(contactList);
    navigate("/contacts-app", { replace: true });
  };
  return (
    <div>
      <h3>Add Contacts</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label htmlFor="phone-number">Mobile Number</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Enter Mobile Number"
            required
            value={contactNum}
            onChange={(e) => setcontactNum(e.target.value)}
          ></input>
        </div>

        <button type="submit">(+) Add Contact Number </button>
      </form>
    </div>
  );
};

export default ADD_Contacts;
