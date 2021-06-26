import React from "react";
import { Link } from "react-router-dom";

const contact = (props) => {
  const { id, name, email, phone, category, imageUrl } = props.contact;
  return (
    <div className="card col-md-3 m-1">
      <img src={imageUrl} className="card-img-top p-2" alt="..." />
      <div className="card-body">
        <span className="badge bg-secondary rounded-pill float-end">
          {category}
        </span>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>

        {/* Navigate to EditComponent with url parameter as 'id' */}

        <Link to={`/edit/${id}`}>
          <em className="fas fa-edit float-end text-secondary m-2"></em>
        </Link>
        <em
          className="fas fa-trash-alt float-end text-danger m-2"
          onClick={() => props.deleteContactHandler(id)}
        ></em>
      </div>
    </div>
  );
};

export default contact;
