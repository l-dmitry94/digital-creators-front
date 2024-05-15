import React, { useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables.js';

import { THEME_DARK } from '../constants/themeConstants';
import { useSelector } from 'react-redux';
import { selectThema } from '../redux/auth/auth-selectors.js';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const localThema = localStorage.getItem('thema');
    const savedThema = useSelector(selectThema);
    const currentThema = localThema ? selectThema : savedThema;
    const [theme, setTheme] = useState(
        currentThema ? currentThema : THEME_DARK
    );

    const change = selectedTheme => {
        setTheme(selectedTheme);
        localStorage.setItem('thema', selectThema);
        changeCssVariables(selectedTheme);
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
