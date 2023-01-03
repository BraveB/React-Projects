import { ToursProps } from "interfaces";
import React, { FC } from "react";
import Tour from "./Tour";

export const Tours: FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-container">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
