import { useDispatch, useSelector } from 'react-redux'
import { voteAnectode } from '../reducers/anecdoteReducer'
import filterReducer  from '../reducers/filterReducer'

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

    // console.log(1, filterReducer.payload)
    // const anecdotesFiltered = anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filterReducer.payload.toLowerCase()))

    const anecdotesDescendingList = anecdotes.sort((a, b) => b.votes - a.votes)

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