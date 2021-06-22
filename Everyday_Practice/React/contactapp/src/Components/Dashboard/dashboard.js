import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../Contact/contact";
import AddContact from "../AddContact/addContact";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const contactsUrl = "http://localhost:3005/contacts";

  useEffect(() => {
    axios.get(contactsUrl).then((response) => {
      console.log(response.data);
      setContacts(response.data);
    });
  }, []);

  const deleteContact = (id) => {
    console.log("Child requested Delete ", id);
    let filteredContacts = contacts.filter((item) => item.id != id);
    setContacts(filteredContacts);
    axios
      .delete(`${contactsUrl}/${id}`)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const addContact = (contact) => {
    console.log("Child Reuested add", contact);
    axios
      .post(contactsUrl, contact, {
        headers: { "content-type": "Application/json" },
      })
      .then((resp) => {
        if (resp.status === 201) {
          setContacts([...contacts, contact]);
        } else {
          if (resp.status === 409) {
            //Code for rendering message will come here
          }
        }
      });
  };

  const message = (
    <React.Fragment>
      <AddContact addContactHandler={addContact} />
      <h5 className="text-success">
        Contact List is Empty. Please start adding now.
      </h5>
    </React.Fragment>
  );

  const contactList = (
    <React.Fragment>
      <AddContact addContactHandler={addContact} />
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* {contacts.length == 0 && message} */}
          {contacts.map((item) => (
            <Contact
              key={item.id}
              contact={item}
              deleteContactHandler={deleteContact}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );

  if (contacts.length == 0) {
    return message;
  } else {
    return contactList;
  }
};

export default Dashboard;
