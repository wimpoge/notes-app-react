import React from "react";
import PropTypes from "prop-types";

function NoteDetail({ title, createdAt, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Created At: {createdAt}</p>
      <p>{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteDetail;
