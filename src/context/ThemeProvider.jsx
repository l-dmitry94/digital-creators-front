import React, { useState, useEffect } from 'react';
import { changeCssVariables } from '../services/changeCssVariables.js';

import { THEME_DARK } from '../constants/themeConstants'; // Додайте всі можливі теми
import { useDispatch } from 'react-redux';
import { updateThema } from '../redux/auth/auth-operations.js';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const dispatch = useDispatch();
    const savedTheme = localStorage.getItem('app-theme') || THEME_DARK;
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        changeCssVariables(theme);
    }, [theme]);

    const change = selectedTheme => {
        setTheme(selectedTheme);
        changeCssVariables(selectedTheme);
        localStorage.setItem('app-theme', selectedTheme);
        dispatch(updateThema({ thema: selectedTheme }));
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
