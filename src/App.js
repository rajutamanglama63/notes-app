import { useState } from "react";
import Note from "./components/Note";


function App(props) {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    let note = {
      id : notes.length + 1,
      content : newNote,
      date : new Date().toISOString(),
      important : Math.random() < 0.5  ? true : false
    }
    setNotes([...notes, note])
    setNewNote("");
  }
  return (
    <div>
      <h1>Notes App</h1>
      <form onSubmit={submitHandler}>
        <input placeholder="enter new note here..." value={newNote} onChange={(e) => setNewNote(e.target.value)} /> 
        <button type="submit">create note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}

export default App;
