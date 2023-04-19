const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}
// ^^ equal to useState({ good:0, ok:0, bad:0 })

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1}
    case 'OK':
      return { ...state, ok: state.ok + 1}
    case 'BAD':
      return { ...state, bad: state.bad + 1}
    case 'ZERO':
      return { good: 0, ok: 0, bad: 0 }
    default: return state
  }
  
}

export default counterReducer

// In your counterReducer function, you are updating the good, ok, and bad properties of the state object, based on the type of the action passed to the reducer.

// The reason you are returning { ...state, good: state.good + 1 } instead of { ...initialState, good: initialState.good +1 } is that you want to preserve the existing state of the reducer and only update the good property by incrementing its value by 1.

// If you were to use { ...initialState, good: initialState.good +1 }, you would be replacing the entire state object with a new object that has the good property updated to the new value. This means that any other properties of the state object that may have been updated before will be lost, and you will be resetting the state to its initial values.

// By using { ...state, good: state.good + 1 }, you are creating a new object that is a copy of the existing state object, with the good property updated to the new value. This ensures that any other properties of the state object that may have been updated before will still be preserved.