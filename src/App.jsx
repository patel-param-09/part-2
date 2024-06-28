import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App(props) {
  // const [Total, setTotal] = useState(0);
  const { parts } = props;
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  // const total = course.parts.reduce((s, p) => s + p);
  // console.log(total);

  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  console.log(total);

  return (
    <>
      <h1>{course.name}</h1>

      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>

      <h2>Total of {total} Exercises</h2>
    </>
  );
}

export default App;
