import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote } from "../utils/network-data";
import { BiTrash } from "react-icons/bi";

function DetailPage() {
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
      <button
        className="action"
        onClick={() => {
          deleteNote(id);
          navigate("/");
        }}
      >
        <BiTrash />
      </button>
    </div>

  )
}



export default DetailPage;
