import { useEffect, useState } from 'react';
import axios from 'axios';
import PersonList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState('');

  const [newPerson, setNewPerson] = useState({
    name: '',
    number: '',
  });

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data);
      });
  }

  useEffect(hook, []);

  const addPerson = (e) => {
    e.preventDefault();
    
    const personObj = {
      name: newPerson.name,
      number: newPerson.number,
      id: persons.length + 1,
    }
    
    const sameNumber = persons.find((person) => person.number === personObj.number);
    if (newPerson.name !== '' && newPerson.number !== '' && !sameNumber) {
      setPersons(persons.concat(personObj));
    } else {
      newPerson.number 
      ? alert(`Person with number ${personObj.number} is already added to phonebook`)
      : alert(`Please add a name and number`)
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
      <PersonList arrayToMap={personsFiltered}/>
    </div>
  )
}

export default App;