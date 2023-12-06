import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Note from './components/Note'
import noteService from './services/notes'

const App = (props) => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const url = 'http://localhost:3001/notes'

  const hook = () => {
    axios.get(url)
      .then(response => {

        setNotes(response.data)
      })
  }
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  }



  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
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
