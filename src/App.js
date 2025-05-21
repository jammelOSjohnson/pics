// Import React library for building user interfaces
import React from "react";
// Import SearchBar component from components directory
import SearchBar from "./components/SearchBar";

// Define App component as a functional component
function App() {
  // Define handleSubmit function that takes a search term as parameter
  const handleSubmit = (term) => {
    // Log the search term to console for debugging
    console.log("do a search with", term);
  };

  // Return JSX that renders the SearchBar component
  // Pass handleSubmit function as onSubmit prop to SearchBar
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

// Export App component as default export
export default App;
