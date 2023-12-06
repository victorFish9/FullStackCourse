import { useEffect, useState } from 'react'
import './App.css'
import AddPerson from './components/AddPerson'
import FilterPerson from './components/FilterPerson'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personsService
      .listAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const addPerson = (event, id) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    console.log("Person object:", personObject)

    const isDuplicateName = persons.some(p => p.name === newName)
    const isDuplicateNumber = persons.some(p => p.number === newNumber)




    if (isDuplicateName) {
      if (isDuplicateNumber) {
        console.log('Number is duplicate')
      } else {
        const isConfirmed = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        if (isConfirmed) {
          personsService.update(id, newNumber)
            .then(returnedNote => {
              setPersons(persons.map(p => p.id !== id ? p : returnedNote))
            })
        }
      }
      alert(`${newName} is already added to phone book`)
      setNewName('')
      setNewNumber('')
    } else {
      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleDelete = (id) => {
    personsService.mydelete(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPerson handleFilterName={handleFilterName} filterName={filterName} />
      <h2>Add new</h2>
      <AddPerson addPerson={addPerson} newName={newName} newNumber={newNumber} setNewNumber={setNewNumber} setNewName={setNewName} />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(x =>
          <li key={x.id}>
            {x.name} {x.number}
            <button onClick={() => handleDelete(x.id)}>Delete</button>
          </li>)}
      </ul>
      <div>debug: {newName} {newNumber}</div>
    </div>
  )

}

export default App
