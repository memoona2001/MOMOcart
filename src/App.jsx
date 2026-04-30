import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Vogn from "./pages/Vogn";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Vogn />} />
      </Routes>
    </BrowserRouter>
  );
}