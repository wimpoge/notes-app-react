import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from '../utils/index';

function NoteItemBody({ createdAt, body }) {
  return (
    <div className="note-item__body">
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
