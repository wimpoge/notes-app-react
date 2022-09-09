import React from "react";
import PropsTypes from "prop-types";
import { BsCheckCircle } from "react-icons/bs";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          className="add-new-page__input__title"
        />
        <input
          type="text"
          placeholder="Body"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          className="add-new-page__input__body"
        />
        <button className="button-logout"><BsCheckCircle type="submit"/></button>
      </form>
    );
  }
}

NoteInput.propsTypes = {
  addNote: PropsTypes.func.isRequired,
};

export default NoteInput;