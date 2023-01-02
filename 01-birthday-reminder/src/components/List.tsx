import { ListProps, User } from "interfaces";
import React, { FC } from "react";
export const List: FC<ListProps> = ({ people, remove }) => {
  return (
    <>
      {people.map((person: User, index: number) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="person-items">
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className="remove" onClick={() => remove(index)}>
                X
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
