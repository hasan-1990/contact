import React from "react";
import "./css/font.css"
import { useState } from "react";
import {
  Contact,
  Contacts,
  Search,
  Navbar,
  Addcontact,
  Editcontact,
  Viewcontact,
  Deletcontact,
} from "./component/Index.jsx";
import { Routes, Route , Navigate } from "react-router-dom"
const App = () => {
  const [getcontacts, setContacts] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
        <Route path="/contacts" element={<Contacts Contacts={getcontacts} />} />
        <Route path="/contacts/:contactid" element={<Contact />} />
        <Route path="/contacts/add" element={<Addcontact />} />
        <Route path="/contacts/edit:contactID" element={<Editcontact />} />
        <Route path="/contacts/edit:contactID" element={<Viewcontact />} />
      </Routes>
    </>
  );
};

export default App;
