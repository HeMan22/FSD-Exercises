import React, { Component } from "react";

class footer extends Component {
  render() {
    const { orgname, year } = this.props;
    return (
      <nav className="navbar fixed-bottom navbar-dark bg-success">
        <div className="container-fluid">
          {orgname}&copy;{year}
        </div>
      </nav>
    );
  }
}

export default footer;
