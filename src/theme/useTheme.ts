import {useContext} from "react";
import {Theme} from "../App";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";

interface IUseTheme {
    theme: Theme,
    toggleTheme: () => void
}

export function useTheme(): IUseTheme {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme, toggleTheme
    }
}
