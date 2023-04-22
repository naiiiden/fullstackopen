import { useState } from 'react'

const useCounter = () => {
  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    setValue(value - 1)
  }

  const zero = () => {
    setValue(0)
  }

  return {
    value, 
    increase,
    decrease,
    zero
  }
}

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const App = () => {
  // plain counter hook
  const counter = useCounter()

  // left right hook
  const left = useCounter()
  const right = useCounter()

  // form hook
  const name = useField('text')
  const birthday = useField('date')
  const height = useField('number')

  return (
    <div>
      <h1>custom hooks</h1>
      <h2>plain counter</h2>
      <div>{counter.value}</div>
      <button onClick={counter.increase}>+</button>
      <button onClick={counter.decrease}>-</button>
      <button onClick={counter.zero}>0</button>

      <h2>left/right counter</h2>
      <div>
        {left.value}
        <button onClick={left.increase}>
          left
        </button>
        <button onClick={right.increase}>
          right
        </button>
        {right.value}
      </div>

      <h2>form</h2>
      <div>
        <form>
          name: 
          <input
            // type={name.type}
            // value={name.value}
            // onChange={name.onChange}
            {...name} 
          /> 
          <br/> 
          birthdate:
          <input
            // type={birthday.type}
            // value={birthday.value}
            // onChange={birthday.onChange}
            {...birthday}
          />
          <br /> 
          height:
          <input
            // type={height.type}
            // value={height.value}
            // onChange={height.onChange}
            {...height}
          />
        </form>
        <div>
          Name: {name.value} Date of Birth: {birthday.value} Height: {height.value} 
        </div>
      </div>
    </div>
  )
}

export default App