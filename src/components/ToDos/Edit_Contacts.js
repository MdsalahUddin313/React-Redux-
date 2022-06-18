import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { editContacts } from "./ContactsSlice";
const Edit_Contacts = () => {
  const navigator = useNavigate();
  const locationData = useLocation();
  const [id, setId] = useState(locationData.state.id);
  const [name, setName] = useState(locationData.state.name);
  const [contactNum, setcontactNum] = useState(locationData.state.contactNum);
  const [createdAt, setcreatedAt] = useState(locationData.state.createdAt);
  //console.log(locationData.state);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    try {
      const updated_data = { id, name, contactNum, createdAt };
      dispatch(editContacts(updated_data));
      console.log("Edit Successfully!!!");
      navigator("/contacts-app", { replace: true });
      // console.log(updated_data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Edit Contacts Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          filetype="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label htmlFor="number">Number</label>
        <input
          filetype="number"
          id="number"
          required
          value={contactNum}
          onChange={(e) => setcontactNum(e.target.value)}
        ></input>
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Edit_Contacts;
