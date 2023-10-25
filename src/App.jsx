import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
      {
        props.total ? (<div>
          <h3>statistics</h3>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {props.total}</p>
          <p>average {(props.good - props.bad) / props.total}</p>
          <p>positive {(props.good / props.total) * 100}%</p>
        </div>) : (<p>No feedback given</p>)
      }

    </div>
  )
}


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
    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
  </div>)
}

export default App