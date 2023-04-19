import { useSelector, useDispatch } from 'react-redux'
import { createAnectode, voteAnectode } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (vote) => {
    console.log('votes number', vote)
    dispatch(voteAnectode(vote))
  }

  const AddAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createAnectode(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={AddAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App