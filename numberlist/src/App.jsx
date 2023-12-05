import { useEffect, useState } from 'react'
import './App.css'
import AddPerson from './components/AddPerson'
import FilterPerson from './components/FilterPerson'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const hook = () => {
    console.log("effect")
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log("promise fulfilled", response)
        setPersons(response.data)
      })
  }

  useEffect(hook, [])


  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const isDuplicateName = persons.some(p => p.name === newName)

    if (isDuplicateName) {
      alert(`${newName} is already added to phone book`)
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
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
          <li key={x.name}>
            {x.name} {x.number}
          </li>)}
      </ul>
      <div>debug: {newName} {newNumber}</div>
    </div>
  )

}

export default App
