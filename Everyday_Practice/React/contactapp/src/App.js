import "./App.css";

import React from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Movie from "./Components/Movie/movie";

function App() {
  return (
    <React.Fragment>
      <Header app="MY CONTACTS" />
      <Movie />
      <Footer orgname="Allstate" year="2021" />
    </React.Fragment>
  );
}

export default App;
