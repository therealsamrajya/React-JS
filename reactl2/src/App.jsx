import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from "./Pages";
import { Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        {/* //FOtter yeta */}
      </BrowserRouter>
    </>
  );
}

export default App;
