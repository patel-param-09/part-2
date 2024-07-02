import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
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
    </div>
  );
};

export default App;
