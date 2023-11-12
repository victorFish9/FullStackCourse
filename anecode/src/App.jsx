import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [rNumber, setRNumber] = useState(0)

  const points = [0, 0, 0, 0, 0, 0, 0, 0]
  //const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }



  const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * (anecdotes.length - 0)) + 0
    setRNumber(randomNumber)
    //console.log("Call from randomNum", randomNumber)

    return randomNumber
  }

  const showAnecdote = () => {
    const randomNumber = randomNum()
    setSelected(randomNumber)
    console.log("Call from showAnecdote", randomNumber)
  }

  const vote = () => {
    //const randomNumber = randomNum()
    const copy = { ...points }
    copy[randomNum()] += 1
    console.log("Call from vote", points[randomNum()])
    console.log(copy)
  }




  return (
    <div>
      {anecdotes[selected]}
      <p> {points[rNumber]}</p>
      <br /><br />
      <button onClick={showAnecdote}>next anecdote</button>
      <button onClick={vote}>vote</button>
    </div>
  )
}
export default App
