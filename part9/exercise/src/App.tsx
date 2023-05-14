import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";


interface CoursePartBase {
  name: string
  exerciseCount: number
}

interface CoursePartDescription extends CoursePartBase {
  description: string
}

interface CoursePartBasic extends CoursePartBase, CoursePartDescription {
  kind: 'basic'
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number
  kind: 'group' 
}

interface CoursePartBackground extends CoursePartBase, CoursePartDescription {
  backgroundMaterial: string
  kind: 'background'
}

interface CoursePartSpecial extends CoursePartBase, CoursePartDescription {
  requirements: string[]
  kind: 'special'
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    }
  ]

  const total = courseParts.reduce((sum, part) => {
    return sum + part.exerciseCount;
  }, 0);

  const courseinfo = courseParts.map((part, i) => {
    switch (part.kind) {
      case 'basic': 
        return <Content 
                key={i}
                name={courseParts[0].name} 
                exerciseCount={courseParts[0].exerciseCount}
                info={`${[part.name, part.description].join(' ')}`}  
              />
      case 'group': 
        return <Content 
                key={i}
                name={courseParts[1].name} 
                exerciseCount={courseParts[1].exerciseCount}
                info={`${[part.name, part.groupProjectCount].join(' ')}`}  
              />
      case 'background': 
        return <Content
                key={i} 
                name={courseParts[2].name} 
                exerciseCount={courseParts[2].exerciseCount}
                info={`${[part.name, part.description, part.backgroundMaterial].join(' ')}`}  
              />
      case 'special':
        return <Content 
                key={i} 
                name={courseParts[3].name} 
                exerciseCount={courseParts[3].exerciseCount}
                info={`${[part.name, part.description, 'required skills: ', part.requirements.join(' ')].join(' ')}`}  
              />
    }
  })

  return (
    <div>
      <Header courseName={courseName}/>
      <main>        
        {courseinfo}
        <Total totalExercises={total}/>
      </main>
    </div>
  );
};

export default App;