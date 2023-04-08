import Part from "./Part";

const Content = ({ course }) => {

    // const total = course.parts.reduce((acc, part) => {
    //     return acc + part.exercises;
    // }, 0);

    return (
        <main>
            {/* <Part courseName={course.parts[0].name} courseExercises={course.parts[0].exercises}/> */}
            {/* <Part courseName={course.parts[1].name} courseExercises={course.parts[1].exercises}/> */}
            {/* <Part courseName={course.parts[2].name} courseExercises={course.parts[2].exercises}/> */}
            {/* <p><b>total of {total} exercises</b></p> */}
        </main>
    )
}

export default Content;