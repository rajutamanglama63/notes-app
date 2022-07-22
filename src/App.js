import { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((result) => {
      setNotes(result.data);
      console.log("rendered");
    });
  }, []);

  const btnToggle = () => {
    setShowAll(!showAll);
  };

  let noteToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const submitHandler = (e) => {
    e.preventDefault();

    let note = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 ? true : false,
    };

    axios.post("http://localhost:5000/notes", note).then((res) => {
      console.log(res.data);
      setNotes([...notes, res.data]);
      setNewNote("");
    });
  };
  return (
    <div>
      <h1>Notes App</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="enter new note here..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">create note</button>
      </form>
      <br />
      <button onClick={btnToggle}>show {showAll ? "important" : "all"}</button>
      <ul>
        {noteToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}

export default App;
