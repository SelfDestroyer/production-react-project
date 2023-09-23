import React, {Suspense, useContext, useState} from 'react';
import {
    Link, Route, Routes,
} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

export enum Theme {
    LIGHT = 'light', DARK = 'dark'
}

const App = () => {
    const {theme, toggleTheme} = useTheme()


    return (<div className={'app'} data-theme={theme}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toggleTheme}>Change theme</button>
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<MainPageLazy/>}/>
                <Route path="/about" element={<AboutPageLazy/>}/>
            </Routes>
        </Suspense>
    </div>)
};

export default App;
