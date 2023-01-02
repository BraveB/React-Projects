import React, { useState } from "react";
import { List } from "components";
import data from "./data";
function App() {
  const [people, setPeople] = useState([...data]);
  const isEmpty = people.length === 0;
  const newPeopleState = isEmpty ? data : [];

  const removeItem = (index: number) => {
    const currentData = [...people];
    currentData.splice(index, 1);
    setPeople(currentData);
  };

  return (
    <main>
      <section className="container">
        <h3>
          {people.length} birthday{people.length !== 1 ? "s" : null} today
        </h3>
        <List people={people} remove={removeItem} />
        <button onClick={() => setPeople(newPeopleState)}>
          {`${isEmpty ? "show" : "clear"} all`}
        </button>
      </section>
    </main>
  );
}

export default App;
