import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '040-1234567', 
    }
  ]);
  const [newName, setNewName] = useState('a new name');
  const [newNumber, setNewNumber] = useState('a new number');

  const addName = (e) => {
    e.preventDefault();
    console.log('btn click', e.target);
    const personObj = {
      name: newName,
      number: newNumber,
    }
    const sameName = persons.find((person) => person.name === personObj.name);
    if (!sameName) {
      setPersons(persons.concat(personObj));
      setNewName('');
    } else {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
    }

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br/>
          phone: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App;