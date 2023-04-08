import Header from "./Header";

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name}/>
            <p>hey</p>
        </div>
    )
}

export default Course;