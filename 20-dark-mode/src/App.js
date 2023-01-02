import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const getStorageTheme = () => {
    let theme = "ligth-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };
  const [theme, setTheme] = useState(getStorageTheme);
  const toggleTheme = () => {
    setTheme(theme === "ligth-theme" ? "dark-theme" : "ligth-theme");
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
