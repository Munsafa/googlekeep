import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { FaRegTrashAlt } from "react-icons/fa";

// import DeleteButton from "./DeleteButton";

const Form = () => {
  const [input, setInput] = useState({ title: "", note: "" });
  const [notes, setNotes] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    // console.log(input)
  }
  function handleSubmit(e) {
    e.preventDefault();
    setNotes((oldNotes) => {
      return [...oldNotes, input];
    });
    setInput({
      title: "",
      note: ""
    });
    // console.log(notes)
  }

  function handleDelete(id) {
    console.log(id);
    setNotes((oldNotes) => {
      return oldNotes.filter((arrele, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="main-div">
      <div className="form-div">
        <input
          className="title-input"
          placeholder="Title"
          name="title"
          type="text"
          onChange={handleInput}
          value={input.title}
        />
        <textarea
          className="note-input"
          placeholder="Write a note"
          name="note"
          type="text"
          onChange={handleInput}
          value={input.note}
        />
        <button className="submit-btn" onClick={handleSubmit}>
          +
        </button>
      </div>
      <div className="outputDiv">
        {notes.map((task, index) => {
          return (
            <div className="note-div" id={index} key={uuidv4()}>
              <h1>{task.title}</h1>
              <br />
              <p>{task.note}</p>
              <button
                className="delete-btn MdDelete"
                onClick={() => handleDelete(index)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
