import { useEffect } from 'react'
import Note from './components/Note'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import noteService from './services/notes'
import { setNotes } from './redurcers/noteReducer'
import { useDispatch } from 'react-redux'
import { initializeNotes } from './redurcers/noteReducer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
  }, [])

  return (
    <>
      <h2>Create Note</h2>
      <NewNote />
      <VisibilityFilter />
      <h2>Notes</h2>
      <Note />
    </>
  )
}

export default App
