import { Button, Table } from "react-bootstrap";
import React from "react";
//import { Link } from "react-router-dom";

const TODO_list = () => {
  const handleAddcontacts = (url) => {
    window.open(url);
  };

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
            <th>Contact Names</th>
            <th>Contact Phone No.</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <p>Md Salah Uddin</p>
              <p className="text-muted">Created At:20/6/22 GMT:6:00</p>
            </th>
            <th>0xxxxxxxx12</th>
            <th>
              <button>Edit</button>
              <button>Delete</button>
            </th>
          </tr>
          <tr>
            <th>
              <p>Sana Ullah Said</p>
              <p className="text-muted py-0">Created At:20/6/22 GMT:6:00</p>
            </th>
            <th>0xxxxxxxx95</th>
            <th>
              <button>Edit</button>
              <button>Delete</button>
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TODO_list;
