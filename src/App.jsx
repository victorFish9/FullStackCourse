import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleFeedbackGood = () => {
    setGood(good + 1)
    setTotal(total + 1)

  }
  const handleFeedbackNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)

  }
  const handleFeedbackBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)

  }

  return (<div>
    <h3>Unicafe feedback</h3>
    <button onClick={handleFeedbackGood}>good</button>
    <button onClick={handleFeedbackNeutral}>neutral</button>
    <button onClick={handleFeedbackBad}>bad</button>
    <h3>statistics</h3>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {total}</p>
    <p>average {(good - bad) / total}</p>
    <p>positive {(good / total) * 100}%</p>
  </div>)
}

export default App