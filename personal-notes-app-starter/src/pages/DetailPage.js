import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote } from "../utils/network-data";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/DeleteButton";

function DetailPage({onDelete}) {
  const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = React.useState({
      title: '',
      body: '',
      createdAt: '',
    });
    
    const { title, body, createdAt } = note;

    React.useEffect(() => {
      async function getNoteDetail(id) {
        const { error, data } = await getNote(id);
        if (!error) {
          setNote(data);
        }
      }
  
      getNoteDetail(id);
    }, []);
  
    return (
            <div>
              <p>{note.title}</p>
              <p>{note.body}</p>
              <p>{note.createdAt}</p>
              <DeleteButton onDelete={onDelete} id={id}/>
            </div>
            
    )
}

export default DetailPage;
