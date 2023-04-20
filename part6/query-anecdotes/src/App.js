import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './requests'

const App = () => {
  const queryClient = useQueryClient()
  
  const VoteAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })
  
  const handleAnecdote = (anecdote) => {
    VoteAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
  }
  
  
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
            <button onClick={() => handleAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
