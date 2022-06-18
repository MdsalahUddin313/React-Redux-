import { Button, Table } from "react-bootstrap";
import React from "react";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const TODO_list = () => {
  const handleAddcontacts = (url) => {
    window.open(url);
  };
  const contacts = useSelector((state) => state.contactsList.contacts);
  // const cont_list_obj = Object.assign({}, contacts);
  // console.log(contacts);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Contact Book App</h4>
      <p>
        You save your contacts in here.Update them as you wish and delete them.
      </p>
      <Button
        variant="outline-info"
        onClick={() =>
          handleAddcontacts("http://localhost:3000/add-contacts-app")
        }
      >
        (+) Add Contacts
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>Contact Id</th>
            <th>Contact Names</th>
            <th>Contact Phone No.</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((e) => {
              //const { id, title, name, contactNum, createdAt } = cont_list_obj;
              //for (var i = 0; i <= contacts.length; i++) {
              return (
                <tr key={e.id}>
                  <th>{e.id}</th>
                  <th>
                    {e.name}
                    <p className="text-muted py-0">Created At: {e.createdAt}</p>
                  </th>
                  <th>{e.contactNum}</th>
                  <th>
                    <button>Edit</button>
                    <button>Delete</button>
                  </th>
                </tr>
              );
              // }
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default TODO_list;
