import Part from "./Part";

const Content = ({ course }) => {
    return (
        <main>
            <Part courseName={course.parts[0].name} courseExercises={course.parts[0].exercises}/>
            <Part courseName={course.parts[1].name} courseExercises={course.parts[1].exercises}/>
            <Part courseName={course.parts[2].name} courseExercises={course.parts[2].exercises}/>
        </main>
    )
}

export default Content;