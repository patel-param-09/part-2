import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [List, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setNewName("");
    return <li>{setList([...List, newName])}</li>;
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {List}
    </div>
  );
};

export default App;
