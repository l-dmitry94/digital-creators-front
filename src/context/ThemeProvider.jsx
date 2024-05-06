import React, { useState } from 'react';
import { changeCssVariables } from '../services/changeCssVariables.js';

import { THEME_DARK } from '../constants/themeConstants';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(THEME_DARK);

    const change = selectedTheme => {
        setTheme(selectedTheme);
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
