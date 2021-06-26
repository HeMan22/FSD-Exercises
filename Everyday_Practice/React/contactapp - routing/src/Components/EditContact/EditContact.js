import axios from "axios";
import React, { Component } from "react";

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    this.contactsUrl = `http://localhost:3005/contacts/`;
    this.state = { name: "", category: "" };
  }

  //Similar to useEffect()
  componentDidMount() {
    const id = this.props.match.params.id;
    const contactsUrl = `${this.contactsUrl}/${id}`;
    axios.get(contactsUrl).then((res) => {
      console.log(res);
      this.setState(res.data);
    });
  }

  saveContact = () => {
    axios
      .put(`${this.contactsUrl}/${this.state.id}`, this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col md-4  mt-4 p-4 border border-success">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
            <select
              value={this.category}
              className="form-select mb-2"
              onChange={(e) => this.setState({ category: e.target.value })}
            >
              <option value="Friends">Friends</option>
              <option value="Office">Office</option>
              <option value="Family">Family</option>
            </select>
            <button className="btn btn-success" onClick={this.saveContact}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
