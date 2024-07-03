import { useState } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhn, setPhn] = useState("");
  const [List, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setNewName("");
    setPhn("");
    setList([...List, { newName, newPhn }]);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleChange2(e) {
    setPhn(e.target.value);
  }

  let showData = <h5>No Data Available</h5>;

  showData = List.map((element, i) => {
    return (
      <li key={i}>
        {element.newName} {element.newPhn}
      </li>
    );
  });

  function handleSearch(e) {
    let filtered = persons.filter((f) =>
      f.name.toLowerCase().includes(e.target.value)
    );
    console.log(filtered);
  }

  const contact = persons.map((data) => {
    return (
      <>
        <li key={data.id}>
          {data.name} {data.number}
        </li>
      </>
    );
  });

  return (
    <div>
      <h2>
        Filter Shown With <input onChange={handleSearch} />
      </h2>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>
          number: <input value={newPhn} onChange={handleChange2} />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{showData}</ul>
      <ul>{contact}</ul>
    </div>
  );
};

export default App;
