// Import React and useState library for building user interfaces
import React, { useState } from "react";
// Import SearchBar component from components directory
import SearchBar from "./components/SearchBar";

// Import ImageList component from components directory
import ImageList from "./components/ImageList";

import SearchImages from "./apis/api";

// Define App component as a functional component
function App() {
  const [images, setImages] = useState([]);
  // Define handleSubmit function that takes a search term as parameter
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    console.log(result);
    setImages(result);
  };

  // Return JSX that renders the SearchBar component
  // Pass handleSubmit function as onSubmit prop to SearchBar
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

// Export App component as default export
export default App;
