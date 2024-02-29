// Loader.jsx
import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa"; // Import the loading icon

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <div className="text-5xl">
          <FaSpinner />
        </div>
      ) : (
        "Loaded!"
      )}
    </div>
  );
};

export default Loader;
