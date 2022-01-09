import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Notes from "./Components/Notes";
import NoteState from "./Context/notes/notestate";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Notes />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
