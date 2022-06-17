import { Button, Table } from "react-bootstrap";
import React from "react";

const TODO_list = () => {
  return (
    <div>
      <h4>Contact Book App</h4>
      <p>
        You save your contacts in here.Update them as you wish and delete them.
      </p>
      <Button variant="outline-info">(+) Add Contacts</Button>
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
            <th>1</th>
            <th>2</th>
            <th>
              <button>Edit</button>
              <button>Delete</button>
            </th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
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
