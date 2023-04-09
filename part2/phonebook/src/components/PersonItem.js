const PersonItem = ({ name, number, id }) => {
    return (
        <li key={number}>{name} - {number}, ID: {id}</li>
    )
}

export default PersonItem;