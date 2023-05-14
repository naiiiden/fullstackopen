import { CoursePart } from "../App";
import Part from "./Part";

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>
            <h2>{part.name} {part.exerciseCount}</h2>
            <Part part={part} />
        </div>
      ))}
    </div>
  );
};

export default Content;