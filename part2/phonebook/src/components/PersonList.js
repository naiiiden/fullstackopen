import PersonItem from "./PersonItem";

const PersonList = ({ arrayToMap, deletePersonById }) => {
    return (
        <ol>
            {arrayToMap.map(person => 
                <PersonItem 
                    deletePersonById={() => deletePersonById(person.id)} 
                    key={person.id} 
                    name={person.name} 
                    number={person.number}
                />)
            }
        </ol>
    )
}

export default PersonList;