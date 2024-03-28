import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/aboutus" element={<AboutUs />} />  */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
