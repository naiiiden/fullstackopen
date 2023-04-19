import { useDispatch } from "react-redux";
import { createAnectode } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const AddAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnectode(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={AddAnecdote}>
                <div><input name="anecdote"/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm