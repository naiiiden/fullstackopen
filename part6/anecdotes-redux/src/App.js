import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {

  // const handleFilter = (e) => {
  //   setFilter(e.target.value);
  // }
  
  // const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Anecdotes/>      
      <AnecdoteForm/>
    </div>
  )
}

export default App