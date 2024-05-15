import React, { useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables.js';

import { THEME_DARK } from '../constants/themeConstants';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/auth-selectors.js';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const localThema = localStorage.getItem('thema');
    const user = useSelector(selectUser);
    const { thema: savedThema } = user;
    const selectedThema = localThema ? localThema : savedThema;
    const currentThema = selectedThema ? selectedThema : THEME_DARK;
    const [theme, setTheme] = useState(currentThema);

    const change = newTheme => {
        setTheme(newTheme);
        localStorage.setItem('thema', newTheme);
        changeCssVariables(newTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                change,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
