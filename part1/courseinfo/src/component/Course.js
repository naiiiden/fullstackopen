import Header from "./Header";
import Part from "./Part";

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name}/>
            <p>hey</p>
            <Part courseName={course.parts[0].name} courseExercises={course.parts[0].exercises}/>
            <Part courseName={course.parts[1].name} courseExercises={course.parts[1].exercises}/>
            <Part courseName={course.parts[2].name} courseExercises={course.parts[2].exercises}/>
        </div>
    )
}

export default Course;

// const Content = ({ course }) => {
//   return (
//     <div>
//       <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
//       <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
//       <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
//     </div>
//   )
// }

// const Total = ({ course }) => {
//   return (
//     <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
//   )
// }