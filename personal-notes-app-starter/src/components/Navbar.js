import React from 'react'
import { MdGTranslate, MdOutlineDarkMode, MdOutlineLightMode, MdLogout } from "react-icons/md";
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function Navbar({ user, logout }) {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const { locale, toggleLocale } = React.useContext(LocaleContext);

    return (
        <header >
            <div className='navigation'>
                <ul>
                    <li>
                        <button onClick={toggleLocale}>
                            {locale} <MdGTranslate />
                        </button>
                    </li>
                    <li>
                        <button onClick={toggleTheme}>
                            {theme === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
                        </button>
                    </li>
                    <li>
                        <button onClick={logout}><MdLogout /> {user.name}  </button>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Navbar