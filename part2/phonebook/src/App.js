import { useState } from 'react'
import PersonItem from './components/PersonItem';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567',id: 1, },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [filter, setFilter] = useState('');

  const [newPerson, setNewPerson] = useState({
    name: 'a new name',
    number: 'a new number',
  });

  const addPerson = (e) => {
    e.preventDefault();
    
    const personObj = {
      name: newPerson.name,
      number: newPerson.number,
      id: persons.length + 1,
    }
    
    const sameNumber = persons.find((person) => person.number === personObj.number);
    if (!sameNumber) {
      setPersons(persons.concat(personObj));
    } else {
      alert(`Person with number ${personObj.number} is already added to phonebook`);
    }
  }

  const handleFilterPerson = (e) => {
    setFilter(e.target.value);
  }
  
  const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      filter shown with <input onChange={handleFilterPerson}/>
      <h2>add a new</h2>
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
        {personsFiltered.map(person => <PersonItem key={person.number} name={person.name} number={person.number} id={person.id}/>)}
      </ul>
    </div>
  )
}

export default App;