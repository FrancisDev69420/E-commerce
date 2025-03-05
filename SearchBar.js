import React from "react";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;

