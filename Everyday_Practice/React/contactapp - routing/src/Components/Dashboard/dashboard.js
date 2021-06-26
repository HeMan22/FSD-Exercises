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

  const message = (
    <React.Fragment>
      <h5 className="text-success">
        Contact List is Empty. Please start adding now.
      </h5>
    </React.Fragment>
  );

  const contactList = (
    <React.Fragment>
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
