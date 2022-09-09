import React from "react";
import Navbar from "./components/Navbar";
import AddPage from "./pages/AddPage";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";


function App() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Catatan</h1>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
