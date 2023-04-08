import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
    return (
        <div>
            {courses.map(course => {
                return (
                    <div>
                        <Header key={course.id} course={course.name}/>
                        <Content parts={course.parts}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Course;