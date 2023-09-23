import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {Theme} from "../App";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme || Theme.LIGHT)

    const defaultThemeContextValue = useMemo(() => ({
        theme, setTheme
    }), [theme])

    return (<ThemeContext.Provider value={defaultThemeContextValue}>
        {children}
    </ThemeContext.Provider>);
};

export default ThemeProvider;
