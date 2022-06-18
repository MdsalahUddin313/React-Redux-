import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Edit_Contacts = () => {
  const navigator = useNavigate();
  const locationData = useLocation();
  console.log(locationData.state);
  const handleSubmit = () => {
    console.log("Edit Successfull!!!");
    //  navigator("/contacts-app", { replace: true });
  };

  return (
    <div>
      <h1>Edit Contacts Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input filetype="text" id="name" required></input>
        <br />
        <label htmlFor="number">Number</label>
        <input filetype="number" id="number" required></input>
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Edit_Contacts;
