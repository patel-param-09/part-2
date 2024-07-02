import React, { useState } from "react";

const App = () => {
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
  // id = 1
  const total = courses[0].parts.reduce(
    (prev, curr) => prev + curr.exercises,
    0
  );
  const Element1 = courses[0].parts.map((Element) => {
    return (
      <li key={Element.id}>
        {Element.name} {Element.exercises}
      </li>
    );
  });
  // id = 2
  const total2 = courses[1].parts.reduce(
    (prev, curr) => prev + curr.exercises,
    0
  );
  const Element2 = courses[1].parts.map((Element) => {
    return (
      <li key={Element.id}>
        {Element.name} {Element.exercises}
      </li>
    );
  });
  // Return Statement
  return (
    <>
      <h1>{courses[0].name}</h1>
      {Element1}
      <h3>Total of {total} Exercises.</h3>
      <hr />
      <h1>{courses[1].name}</h1>
      {Element2}
      <h3>Total of {total2} Exercises.</h3>
    </>
  );
};

export default App;
