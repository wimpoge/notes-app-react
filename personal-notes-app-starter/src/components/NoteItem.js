import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import { Link } from "react-router-dom";

function NoteItem  ({ id, title, createdAt, body }) {
  return (
  <div className="note-item">
    <Link to={`/notes/${id}`}>{title} </Link>
    <NoteItemBody createdAt={createdAt} body={body}/>
  </div>
  );
};

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteItem;
