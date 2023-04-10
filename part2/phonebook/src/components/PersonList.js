import PersonItem from "./PersonItem";

const PersonList = ({ arrayToMap }) => {
    return (
        <ol>
            {arrayToMap.map(person => <PersonItem key={person.number} name={person.name} number={person.number}/>)}
        </ol>
    )
}

export default PersonList;