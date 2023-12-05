import { useState } from 'react'
import './App.css'
import AddPerson from './components/AddPerson'
import FilterPerson from './components/FilterPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '04440000' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')


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
