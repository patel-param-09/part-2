import React, { useState } from "react";

const App = () => {
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
  // id = 1
  const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);
  const Element1 = course.parts.map((Element) => {
    return (
      <li key={Element.id}>
        {Element.name} {Element.exercises}
      </li>
    );
  });
  // Return Statement
  return (
    <>
      <h1>{course.name}</h1>
      {Element1}
      <h3>Total of {total} Exercises.</h3>
    </>
  );
};

export default App;
