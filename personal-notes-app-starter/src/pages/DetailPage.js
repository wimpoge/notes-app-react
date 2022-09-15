import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote } from "../utils/network-data";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/DeleteButton";


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
              
              
              {/* <NoteDetail id={id} title={title} createdAt={createdAt} body={body} onDelete={deleteNote} />  */}
            </div>
            
    )
}

export default DetailPage;
