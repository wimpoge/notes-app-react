import React from "react";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import { getActiveNotes, deleteNote } from "../utils/network-data";
import { GrAddCircle } from "react-icons/gr";
import SearchBar from "../components/SearchBar";

// class Homepage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getActiveNotes(),
//       keyword: props.defaultKeyword || "",
//     };
//     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//   }
//   onKeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return {
//         keyword,
//       };
//     });
//   }

//   async onDeleteHandler(id) {
//     await deleteNote(id);

//     // update the contact state from data.js
//     const { data  } = await getActiveNotes();
//     this.setState(() => {
//       return {
//         contacts: data,
//       }
//     });
//   }

//   render() {
//     const notes = this.state.notes.filter((note) => {
//       return note.title
//         .toLowerCase()
//         .includes(this.state.keyword.toLowerCase());
//     });

//     return (
//       <div>
//         <section>
//           <h2>Daftar Catatan</h2>
//           <SearchBar
//             keyword={this.state.keyword}
//             keywordChange={this.onKeywordChangeHandler}
//           />
//           <NoteList notes={notes} />
//         </section>
//         <Link to="/add" className="action">
//           <GrAddCircle />
//         </Link>
//       </div>
//     );
//   }
// }

function Homepage() {
  const [notes, setNotes] = React.useState([])
  const [title, setTitle] = React.useState(null);
  const [body, setBody] = React.useState(null);

  React.useEffect(() => {
    async function setActiveNotes() {
      const { error, data } = await getActiveNotes();

      if(!error) {
        setNotes(data)

      }
      setTitle(title);
      setBody(body);
    }

    setActiveNotes();

    return () => {
      setTitle(null);
      setBody(null);
    };
  }, []);

  return (
    <div>
      <section>
        <h2>Daftar Catatan</h2>
        <SearchBar
        // keyword={this.state.keyword}
        // keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={notes} />
        
      </section>

      <Link to="/add" className="action">
        <GrAddCircle />
      </Link>
    </div>
  );
}

export default Homepage;
