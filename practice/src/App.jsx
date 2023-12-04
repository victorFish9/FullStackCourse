import { useState } from 'react'
import './App.css'
import Note from './components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const result = notes.map(note => note.id)
  console.log("Result: ", result)

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {

    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
export default App
