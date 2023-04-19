import { useSelector, useDispatch } from 'react-redux'
import { createAnectode, voteAnectode } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (vote) => {
    console.log('votes number', vote)
    dispatch(voteAnectode(vote))
  }

  const anecdotesDescendingList = anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesDescendingList.map(anecdote =>
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
      <AnecdoteForm/>
    </div>
  )
}

export default App