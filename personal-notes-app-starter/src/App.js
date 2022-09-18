import React, { useEffect } from "react";
import AddPage from "./pages/AddPage";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/404";
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import { getUserLogged, putAccessToken } from '../src/utils/network-data';
import Navbar from "./components/Navbar";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContext from "./contexts/LocaleContext";


function App() {
  const [authedUser, setAuthedUser] = React.useState(null)
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  const [locale, setLocale] = React.useState('id')

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const changeTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", changeTheme);
      return changeTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const changeLang = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("languange", changeLang);
      return changeLang
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);



  const loginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }



  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className='contact-app'>
            <header className="contact-app__header" >
              <h1>{localeContextValue.locale === "id" ? "Aplikasi Catatan" : "Note App"}</h1>
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<Login loginSuccess={loginSuccess} />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="contact-app">
        <h1>{localeContextValue.locale === "id" ? "Aplikasi Catatan" : "Note App"}</h1>
          <Navbar user={authedUser} />
          <main>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
