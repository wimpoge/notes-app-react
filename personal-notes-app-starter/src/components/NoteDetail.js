import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";


function NoteDetail({ id, onDelete }) {
  return (
    <div>
      
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
