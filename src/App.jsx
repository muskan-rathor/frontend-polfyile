import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Help from "./pages/Help";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
<<<<<<< HEAD
import Term from "./pages/Term";
import Drag from "./pages/DragAndDrop";
=======
import Home from "./pages/Home";

>>>>>>> ef5bf031bc521af41557e64796ffa16f1c4cfa80
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<LandingPage />} />
      <Route path="/Help" element={<Help/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Privacy" element={<Privacy/>} />
      <Route path="/Term" element={<Term/>} />
      <Route path="/Drag" element={<Drag/>} />
=======
        <Route path="/" element={<LandingPage />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/About" element={<About />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Home" element={<Home />} />
>>>>>>> ef5bf031bc521af41557e64796ffa16f1c4cfa80
      </Routes>
    </BrowserRouter>
  );
}

export default App;
