import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({ statistic, data }) => {
  return (
    <p>{statistic} - {data}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedback = good + neutral + bad
  const average = allFeedback === 0 ? 0 : (good - bad) / allFeedback
  const positive = allFeedback === 0 ? 0 : (good / allFeedback) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <h2>statistics</h2>
      <Statistic statistic="good" data={good}/>
      <Statistic statistic="neutral" data={neutral}/>
      <Statistic statistic="bad" data={bad}/>
      <Statistic statistic="all" data={good + neutral + bad}/>
      <Statistic statistic="average" data={average}/>
      <Statistic statistic="positive" data={positive}/>
    </div>
  )
}

export default App