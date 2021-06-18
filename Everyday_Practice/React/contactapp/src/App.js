import "./App.css";

import React from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <React.Fragment>
      <Header app="MY CONTACTS" />;
      <Footer orgname="Allstate" year="2021" />
    </React.Fragment>
  );
}

export default App;
