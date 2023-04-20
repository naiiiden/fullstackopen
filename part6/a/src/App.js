import NewNote from './components/NewNote'
import Note from './components/Note'
import VisibilityFilter from './components/visibilityFilter'

const App = () => {
  return (
    <div>
      <NewNote/>
      <VisibilityFilter/>
      <Note/>
    </div>
  )
}

export default App