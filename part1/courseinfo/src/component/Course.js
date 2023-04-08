import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content course={course}/>
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