// Import axios library for making HTTP requests
import axios from "axios";

// Function to search for images using the Unsplash API
const searchImages = async (term) => {
  // Make GET request to Unsplash API search endpoint
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    // Set authorization header using environment variable
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
    // Set query parameter to search for car images
    params: {
      query: term,
    },
  });

  // Log the response for debugging
  console.log(response.data.results);
  // Return the response data
  return response;
};

// Export the searchImages function as default
export default searchImages;
