import React from "react";
import "./style.css"

function Jumbotron({ children, title, lead }) {
  return (
    <div className="jumbotron jumbotron-fluid text-light">
      <div className="container text-center">
        <h1 className="display-3">{title}</h1>
        <h1 className="display-5">
          {lead}
        </h1>
      </div>{children}
    </div>
  );
}

export default Jumbotron;
