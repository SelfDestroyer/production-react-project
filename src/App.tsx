import React, {Suspense} from 'react';
import {
    Link, Route, Routes,
} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (<div className={classNames('app', {test: true, added: true},[])} data-theme={theme}>
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
