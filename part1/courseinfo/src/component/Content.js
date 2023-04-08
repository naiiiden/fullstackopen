import Part from "./Part";

const Content = ({ parts }) => {
    console.log('parts:', parts);

    const total = parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0);

    return (
        <div>
            {parts.map(part => {
                return (
                    <Part key={part.id} courseName={part.name} courseExercises={part.exercises}/>
                )
            })}
            <p><strong>total of exercises {total}</strong></p>
        </div>
    )
}

export default Content;