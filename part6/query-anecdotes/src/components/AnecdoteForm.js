import { useMutation, useQueryClient, useQuery } from 'react-query'
import { createAnecdote, getAnecdotes } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      queryClient.invalidateQueries('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    }
  })

  const result = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false
  })
  const anecdotes = result.data

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    console.log('addAnecdote', content)
    dispatch({type: 'ADD', message: `New anecdote "${content}" added`})
    setTimeout(() => {
      dispatch({type: 'ADD', message: null})
    }, 5000)
    e.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
