import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import OompaLoompa from "@/pages/OompaLoompa";
import NavBar from "@/components/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<OompaLoompa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
