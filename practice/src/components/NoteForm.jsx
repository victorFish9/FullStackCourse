import { useState } from "react"

const NoteForm = ({ createNote }) => {
    const [newNote, setNewNote] = useState('')
    const [testInputNote, setTestInputNote] = useState('')

    const addNote = (event) => {
        event.preventDefault()
        createNote({
            content: newNote,
            important: Math.random() > 0.5
        })
        setNewNote('')
    }

    return (
        <div className="formDiv">
            <h2>
                Create a new note
            </h2>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={event => setNewNote(event.target.value)} id="note-input" />
                <input value={testInputNote} onChange={event => setTestInputNote(event.target.value)} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default NoteForm