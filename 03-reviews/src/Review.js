import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const prev = "prev";
  const next = "next";
  const random = "random";
  const randomNumber = () => Math.floor(Math.random() * people.length);
  const checkNumber = (newIndex) => {
    if (newIndex < 0) return people.length - 1;
    if (newIndex >= people.length) return 0;
    return newIndex;
  };
  const updateIndex = (button) => {
    let newIndex = 0;
    switch (button) {
      case prev:
        newIndex = checkNumber(index - 1);
        break;
      case next:
        newIndex = checkNumber(index + 1);
        break;
      default:
        newIndex = randomNumber();
        if (newIndex === index) {
          newIndex = checkNumber(index - 1);
        }
        break;
    }
    setIndex(newIndex);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => updateIndex(prev)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => updateIndex(next)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => updateIndex(random)}>
        surpise me!
      </button>
    </article>
  );
};

export default Review;
