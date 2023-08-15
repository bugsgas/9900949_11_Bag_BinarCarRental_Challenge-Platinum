import React, { useState } from "react";

export default function CarSearchForm({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="search-button-wrap">
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
}
