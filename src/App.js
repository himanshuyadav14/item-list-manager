import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new item"
        style={{
          padding: "10px",
          marginRight: "10px",
          fontSize: "16px",
          width: "200px",
        }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: "20px", fontSize: "18px" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
