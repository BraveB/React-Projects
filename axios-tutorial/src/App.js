import React from "react";
import Title from "./components/Title";
import Setup from "./examples/4-global-instance";
import axios from "./axios/global";

function App() {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
}

export default App;
