import { useDispatch, useSelector } from 'react-redux'
import { voteAnectode } from '../reducers/anecdoteReducer'
import filterReducer, { filterChange }  from '../reducers/filterReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
          </div>
        </div>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state)
    const anecdotesFiltered = anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.filter.toLowerCase()))
    const anecdotesDescendingList = anecdotesFiltered.sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {anecdotesDescendingList.map(anecdote => 
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        dispatch(voteAnectode(anecdote.id, anecdote.votes))
                    }}
                />
            )}
        </div>
    )
}

export default Anecdotes