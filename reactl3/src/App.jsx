import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Products } from "./Pages";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Highlights } from "./Pages";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      {loading ? (
        <Loader /> // Render the Loader component while the page is loading
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/highlights" element={<Highlights />} />
          </Routes>

          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
