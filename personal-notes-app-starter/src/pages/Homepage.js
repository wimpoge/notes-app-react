import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import { GrAddCircle } from "react-icons/gr";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";

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

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  }, [notes, keyword]);


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
                <NoteList notes={notes} filter={filteredNotes} />
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