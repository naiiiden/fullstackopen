import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('a new name');
  // const [showAll, setShowAll] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    console.log('btn click', e.target);
    const nameObj = {
      name: newName,
    }
    setPersons(persons.concat(nameObj));
    setNewName('');
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  console.log(2, persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

    </div>
  )
}

export default App;