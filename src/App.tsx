import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import OompaLoompa from "./pages/OompaLoompa";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<OompaLoompa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
