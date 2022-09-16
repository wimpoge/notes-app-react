import React from "react";
import PropTypes from "prop-types";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/network-data";

function DeleteButton({id}) {
  const navigate = useNavigate();
  const onDelete = deleteNote(id)

  return (
    <button
      className="action"
      onClick={(note) => {
        onDelete(note.id);
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
