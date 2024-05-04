import React, { useState } from 'react';
import { THEME_DARK } from '../constants/themeConstants';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(THEME_DARK);

    const change = name => {
        setTheme(name);
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
