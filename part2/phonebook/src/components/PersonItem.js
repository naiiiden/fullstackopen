const PersonItem = ({ name, number }) => {
    return (
        <li key={number}>{name} - {number}</li>
    )
}

export default PersonItem;