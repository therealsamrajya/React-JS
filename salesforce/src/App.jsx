import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/aboutus" element={<AboutUs />} /> */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
