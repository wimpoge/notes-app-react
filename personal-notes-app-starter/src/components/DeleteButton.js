import React from "react";
import PropTypes from "prop-types";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/network-data";

function DeleteButton({ id, onDelete }) {
  const navigate = useNavigate();

  return (
    <button
      className="action"
      onClick={(note) => {
        deleteNote(note.id);
        navigate("/");
      }}
    >
      <BiTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
