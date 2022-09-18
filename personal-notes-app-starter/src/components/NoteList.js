import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NoteList({ notes }) {
  return (
    notes.length ? (
      <div className="note_list">
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </div>
    ) : (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <div>
              <p className="note-list_empty">
                {locale === "id"
                  ? "Kosong"
                  : "Empty"}
              </p>
            </div>

          );
        }
        }
      </LocaleConsumer>
    )
  )
}


NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
