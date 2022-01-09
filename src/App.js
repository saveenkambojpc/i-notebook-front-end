import "./App.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Services from "./Component/Services";
import Notes from "./Component/Notes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Notes />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
