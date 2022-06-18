import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ADD_Contacts = () => {
  const [contactNames, setContactNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const numberOfContacts = useSelector(
    (state) => state.contactsList.contacts.length
  );
  const dispatch = useDispatch();
  //console.log(numberOfContacts);
  //console.log({ contactNames, phoneNumber });
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().getTime();
    const timestamp_string = timestamp.toString();
    const contactList = {
      id: numberOfContacts + 1,
      contactNames,
      phoneNumber,
      timestamp_string,
    };
    console.log(contactList);
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
            value={contactNames}
            onChange={(e) => setContactNames(e.target.value)}
          ></input>
          <br />
          <label htmlFor="phone-number">Mobile Number</label>
          <input
            type="text"
            id="phone-number"
            placeholder="Enter Mobile Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
      </form>
      <button type="submit">(+) Add Contact Number </button>
    </div>
  );
};

export default ADD_Contacts;
