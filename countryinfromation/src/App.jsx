import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [country, setCountry] = useState([])
  const [filterCountry, setFilterCountry] = useState([])

  const hook = () => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountry(response.data)
      })
  }
  console.log(country)
  useEffect(() => {
    hook()
  }, [])

  const handleFilterCountry = (event) => {
    console.log(event.target.value)
    setFilterCountry(event.target.value)
  }

  const filteredCountry = country.filter((c) =>
    c.name.common.toLowerCase().includes(filterCountry))


  return (
    <>
      <h2>Welcome to country page</h2>
      <input onChange={handleFilterCountry} />
      {filteredCountry.length > 10 ? (
        <p>There are more than 10 countries</p>
      ) : filteredCountry.length == 1 ? (
        <ul>
          {filteredCountry.map((c, index) => (
            <div key={index}>
              <h2>{c.name.common}</h2>
              <p>capital {c.capital}</p>
              <p>area {c.area}</p>

              <img src={c.flags.png} />
            </div >
          ))
          }
        </ul >
      ) : (
        <ul>
          {filteredCountry.map((c, index) => (
            <li key={index}>{c.name.official}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
