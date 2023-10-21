import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedbackGood = () => {
    setGood(good + 1)

  }

  return (<div>
    <h3>Unicafe feedback</h3>
    <button onClick={handleFeedbackGood}>good</button>
    <p>good {good}</p>
  </div>)
}

export default App