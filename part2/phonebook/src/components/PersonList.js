import PersonItem from "./PersonItem";

const PersonList = ({ arrayToMap }) => {
    return (
        <ul>
            {arrayToMap.map(person => <PersonItem key={person.number} name={person.name} number={person.number} id={person.id}/>)}
        </ul>
    )
}

export default PersonList;