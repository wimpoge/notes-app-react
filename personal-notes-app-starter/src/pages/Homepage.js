import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { getActiveNotes, deleteNote } from "../utils/network-data";
import { GrAddCircle } from "react-icons/gr";
import SearchBar from "../components/SearchBar";
import LocaleContext, { LocaleConsumer } from "../contexts/LocaleContext";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });


  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);


  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredContacts = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });


  React.useEffect(() => {
    async function setActiveNotes() {
      const { error, data } = await getActiveNotes();

      if (!error) {
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
  }, [title, body]);

  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (

            <div>
              <section>
                <h2>{locale === 'id' ? "Daftar Catatan" : 'List Note'}</h2>
                <SearchBar
                  keyword={keyword}
                  keywordChange={onKeywordChangeHandler}
                />
                <NoteList notes={notes} filter={filteredContacts} />
              </section>

              <Link to="/add" className="action">
                <GrAddCircle />
              </Link>
            </div>
          )
        }
      }
    </LocaleConsumer>
  );
}

export default Homepage;