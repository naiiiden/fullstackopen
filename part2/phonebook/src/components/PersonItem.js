const PersonItem = ({ name, number, deletePersonById }) => {
    return (
        <li key={number}>
            {name} - {number}
            <button onClick={deletePersonById}>delete</button>
        </li>
    )
}

export default PersonItem;