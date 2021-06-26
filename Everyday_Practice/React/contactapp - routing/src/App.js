import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Dashboard from "./Components/Dashboard/dashboard";
import AddContact from "./Components/AddContact/addContact";
import Login from "./Components/Login/Login";
import EditContact from "./Components/EditContact/EditContact";
import Register from "./Components/Register/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header app="MYCONTACTS" />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Login" component={Login} />
          <Route path="/Add" component={AddContact} />
          <Route path="/Register" component={Register} />
          <Route path="/edit/:id" component={EditContact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer orgname="Allstate" year="2021" />
    </div>
  );
}

export default App;
