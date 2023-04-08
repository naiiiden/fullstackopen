import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '040-1234567', 
    }
  ]);

  const [newPerson, setNewPerson] = useState({
    name: 'a new name',
    number: 'a new number',
  });

  const addPerson = (e) => {
    e.preventDefault();
    
    const personObj = {
      name: newPerson.name,
      number: newPerson.number,
    }
    
    const sameNumber = persons.find((person) => person.number === personObj.number);
    if (!sameNumber) {
      setPersons(persons.concat(personObj));
    } else {
      alert(`Person with number ${personObj.number} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            placeholder={newPerson.name} 
            onChange={(e) => setNewPerson({name: e.target.value, number: newPerson.number})}
          />
          <br/>
          phone: 
          <input 
            placeholder={newPerson.number} 
            onChange={(e) => setNewPerson({name: newPerson.name, number: e.target.value})}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.number}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App;