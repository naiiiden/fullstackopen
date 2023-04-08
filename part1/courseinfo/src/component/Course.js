import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
    return (
        <div>
            <header>
                <h1>Web development curriculum</h1>
            </header>
            <main>
                {courses.map(course => {
                    return (
                        <div key={course.id}>
                            <Header course={course.name}/>
                            <Content parts={course.parts}/>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default Course;