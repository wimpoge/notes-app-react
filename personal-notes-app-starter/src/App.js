import React from "react";
import AddPage from "./pages/AddPage";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/404";
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import { getUserLogged, putAccessToken } from '../src/utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null)

  const loginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  if (authedUser === null) {
    return (
      <div className='contact-app'>
        <header className='contact-app__header'>
          <h1>Aplikasi Kontak</h1>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<Login loginSuccess={loginSuccess}  />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    )
  }

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
