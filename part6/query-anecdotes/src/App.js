import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { createAnecdote, getAnecdotes } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  const result = useQuery('anecdotes', getAnecdotes)
  
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    }
  })

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    console.log(content)
    e.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
  
  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
      <Notification />
      <AnecdoteForm />
      {anecdotes?.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => console.log(anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
