import React from "react";

const header = (props) => {
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand fs-bolder fw-3">{props.app}</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default header;
