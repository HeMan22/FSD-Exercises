import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Dashboard from "./Components/Dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Header app="MYCONTACTS" />
      <Dashboard />
      <Footer orgname="Allstate" year="2021" />
    </div>
  );
}

export default App;
