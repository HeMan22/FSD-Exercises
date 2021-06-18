import React, { Component } from "react";

export default class Second extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "test",
      contact: { name: "Johnny", email: "johnny@test.com" },
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    console.log("Button clicked");

    this.setState({ contact: { name: "Mike" } }, () =>
      console.log(this.state.contact.name)
    );
  };

  render() {
    const { desc } = this.props;
    return (
      <div>
        This is from a Class Component
        <p>{this.props.desc}</p>
        <p>{desc}</p>
        <p>
          {this.state.contact.name} {this.state.contact.email} {this.state.test}
        </p>
        <button onClick={this.clickHandler}> Change the Name</button>
      </div>
    );
  }
}
