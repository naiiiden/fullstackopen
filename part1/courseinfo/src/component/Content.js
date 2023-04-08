import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
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
            <Total exercises={total}/>
        </div>
    )
}

export default Content;