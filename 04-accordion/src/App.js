import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const questions = data;
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}

export default App;
