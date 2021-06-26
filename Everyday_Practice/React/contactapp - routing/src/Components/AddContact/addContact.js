import React, { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Friends");
  const imageUrl = "http://picsum.photos/200";
  // const [isSaved, setIsSaved] = useState(false);
  const history = useHistory();
  const contact = { id: v4(), name, phone, email, category, imageUrl };
  const contactsUrl = "http://localhost:3005/contacts";

  const addContact = () => {
    console.log("Child Reuested add", contact);
    axios
      .post(contactsUrl, contact, {
        headers: { "content-type": "Application/json" },
      })
      .then((resp) => {
        if (resp.status === 201) {
          // navigate to Dashboard
          // setIsSaved(true);
          history.push("/");
        } else {
          if (resp.status === 409) {
            //Code for rendering message will come here
          }
        }
      });
  };

  // if (isSaved) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col md-4  mt-4 p-4 border border-success">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            value={category}
            className="form-select mb-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Friends">Friends</option>
            <option value="Office">Office</option>
            <option value="Family">Family</option>
          </select>
          <button className="btn btn-success" onClick={addContact}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
