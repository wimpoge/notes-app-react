import React from "react";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import { GrAddCircle } from "react-icons/gr";
import SearchBar from "../components/SearchBar";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <div>
        <section>
          <h2>Daftar Catatan</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NoteList notes={notes} />
        </section>
        <Link to="/add" className="action">
          <GrAddCircle />
        </Link>
      </div>
    );
  }
}

export default Homepage;
