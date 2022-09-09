import React from "react";
import AddPage from "./pages/AddPage";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/404";


function App() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Catatan</h1>
      </header>
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
