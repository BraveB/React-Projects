import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = allCategories;

  const filterItems = (category) => {
    const newItems =
      category !== "all"
        ? items.filter((item) => item.category === category)
        : items;
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
      </section>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
