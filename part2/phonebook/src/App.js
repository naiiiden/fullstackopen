import { useEffect, useState } from 'react';
import personService from './services/persons';
import PersonList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState('');

  const [newPerson, setNewPerson] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    
    const personObj = {
      name: newPerson.name,
      number: newPerson.number,
    }
    
    const sameNumber = persons.find((person) => person.number === personObj.number);
    if (newPerson.name !== '' && newPerson.number !== '' && !sameNumber) {
      setPersons(persons.concat(personObj));
      personService
        .create(personObj)
        .then(response => {
          console.log(response.data);
          setNewPerson({
            name: '',
            number: '',
          });
        })
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

  const deletePersonById = (id, name, number) => {
    if (window.confirm(`delete person with: \nname: ${name}\nnumber: ${number}\nID: ${id}?`)) {
      console.log(`person: ${name} ${id} is deleted`);
      personService
        .deletePerson(id)
        .then(response => {
          console.log('delete', response.data);
          setPersons(persons.filter((person) => {
            return person.id !== id;
          }));
        })
    }
  }

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
      <PersonList 
        arrayToMap={personsFiltered} 
        deletePersonById={deletePersonById}
      />
    </div>
  )
}

export default App;