import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

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

  function handleClick(e) {
    console.log(e.target.id);
    console.log(e.target.name);
    window.confirm(`Delete ${e.target.name} ?`);
    axios.delete(`http://localhost:3001/persons/${e.target.id}`).then((res) => {
      const restElement = persons.filter((item) => {
        item.id !== e.target.id;
        setPersons(restElement);
      });
    });
  }

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

  const contactData = persons.map((contact) => {
    return (
      <li key={contact.id}>
        {contact.name} {contact.number}
        <button onClick={handleClick} id={contact.id} name={contact.name}>
          Delete
        </button>
      </li>
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
      <ul>{contactData}</ul>
    </div>
  );
};

export default App;
