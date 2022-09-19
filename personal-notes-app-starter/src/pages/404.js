import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      NotFound
      <br />
      <Link to="/" style={{ textAlign: "center" }}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
