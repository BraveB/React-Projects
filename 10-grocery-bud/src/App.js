import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const getLocalStorage = () => {
    let storedList = localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  };
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const showAlert = (show = false, type = "", msg = "") =>
    setAlert({ show: show, msg: msg, type: type });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please, enter value");
      return;
    }
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "item name has been saved successfuly");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
    }
    setName("");
  };
  const clearItems = () => {
    showAlert(true, "success", "the items have been removed");
    setList([]);
  };
  const removeItem = (id) => {
    if (!id) return;
    showAlert(true, "danger", "item has been removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    if (isEditing) {
      showAlert(true, "danger", "there is already an item being edit");
      return;
    }
    const editedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editedItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "update" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={() => clearItems()}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
