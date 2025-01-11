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
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "15px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        HackerRank Item Manager
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: "1",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "28px",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Item List Manager
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a new item"
              style={{
                padding: "10px",
                fontSize: "16px",
                width: "70%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleAddItem}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Add Item
            </button>
          </div>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "18px",
              color: "#555",
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #ddd",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "10px",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        © 2025 HackerRank, All Rights Reserved
      </footer>
    </div>
  );
}

export default ItemListManager;
