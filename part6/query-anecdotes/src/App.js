import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, voteAnecdote } from './requests'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const VoteAnecdoteMutation = useMutation(voteAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })
  
  const handleVoteAnecdote = (anecdote) => {
    dispatch({type: 'VOTE', message: `anecdote "${anecdote.content}" voted`})
    VoteAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
    setTimeout(() => {
      dispatch({type: 'VOTE', message: null})
    }, 5000)
  }
  
  // fetch /anecdotes
  const result = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
  
  const anecdotes = result.data
  
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes?.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => (handleVoteAnecdote(anecdote))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
