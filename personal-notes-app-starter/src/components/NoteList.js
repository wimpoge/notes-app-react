import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id}>
          <NoteItem id={note.id} {...note} />
        </div>
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
