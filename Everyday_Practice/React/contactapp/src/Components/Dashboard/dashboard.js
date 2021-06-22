import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../Contact/contact";
const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const contactsUrl = "http://localhost:3005/contacts";

  useEffect(() => {
    axios.get(contactsUrl).then((response) => {
      console.log(response.data);
      setContacts(response.data);
    });
  }, []);

  return (
    <div className="success">
      {contacts.map((item) => (
        <Contact key={item.id} contact={item} />
      ))}
    </div>
  );
};

export default Dashboard;
