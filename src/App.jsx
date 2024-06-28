import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const { exercises } = props;
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const total =
    courses[0].parts[0].exercises +
    courses[0].parts[1].exercises +
    courses[0].parts[2].exercises;
  console.log(total);

  const total2 = courses[1].parts[0].exercises + courses[1].parts[1].exercises;
  console.log(total2);
  return (
    <>
      <h1>{courses[0].name}</h1>

      <p>
        {courses[0].parts[0].name} {courses[0].parts[0].exercises}
      </p>
      <p>
        {courses[0].parts[1].name} {courses[0].parts[1].exercises}
      </p>
      <p>
        {courses[0].parts[2].name} {courses[0].parts[2].exercises}
      </p>

      <h2>Total of {total} Exercises</h2>
      {/* second Object */}
      <h1>{courses[1].name}</h1>

      <p>
        {courses[1].parts[0].name} {courses[1].parts[0].exercises}
      </p>
      <p>
        {courses[1].parts[1].name} {courses[1].parts[1].exercises}
      </p>

      <h2>Total of {total2} Exercises</h2>
    </>
  );
}

export default App;
