import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const definePosition = (itemIndex) => {
    if (itemIndex === index) return "activeSlide";
    if (
      itemIndex === index - 1 ||
      (index === 0 && itemIndex === people.length - 1)
    )
      return "lastSlide";
    return "nextSlide";
  };
  const checkIndex = (newIndex) => {
    if (newIndex < 0) return people.length - 1;
    if (newIndex >= people.length) return 0;
    return newIndex;
  };
  const defineIndex = (action) => {
    if (action === "next") return checkIndex(index + 1);
    return checkIndex(index - 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(defineIndex("next"));
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, title, quote, name } = person;
          let position = definePosition(personIndex);
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(defineIndex("prev"))}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(defineIndex("next"))}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
