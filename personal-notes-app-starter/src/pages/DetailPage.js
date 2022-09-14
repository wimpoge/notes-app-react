import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote } from "../utils/local-data";
import PropTypes from "prop-types";

// function DetailPageWrapper() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   function onDeleteHandler(id) {
//     deleteNote(id);
//     navigate("/");
//   }
//   return <DetailPage id={id} onDelete={onDeleteHandler} />;
// }

// class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       note: getNote(props.id),
//     };
//   }

//   render() {
//     return (
//       <section>
//         <NoteDetail {...this.state.note} onDelete={deleteNote} />
//       </section>
//     );
//   }
// }

// DetailPage.propTypes = {
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

function DetailPage() {
  const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = React.useState({
      title: '',
      body: '',
      createdAt: null,
    });
    const { title, body, createdAt } = note;

    React.useEffect(() => {
      async function setActiveNotes(id) {
        const { error, data } = await getNote(id);
        if (!error) {
          setNote(data);
        }
      }
  
      setActiveNotes(id);
    }, []);
  
    return (
            <section>
              <NoteDetail id={id} title={title} createdAt={createdAt} body={body} onDelete={deleteNote} /> 
            </section>
    )
}

export default DetailPage;
