import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <h1>hello</h1>
      <div>
        {/* {data.map((post) => {
          const { name, number, id } = post;
          return (
            <ul key={id}>
              <h4>
                {name} {number}
              </h4>
            </ul>
          );
        })} */}
        {data.map((element) => {
          //  const {name, number, id} = element;
          return (
            <ul key={element.id} className="contact">
              <h5>{element.name}</h5> <p>{element.number}</p>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default App;
