import React, {Suspense} from 'react';
import './index.scss'
import {
    Link, Route, Routes
} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";


const Root = () => {
    return (<>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<MainPageLazy/>}/>
                <Route path="/about" element={<AboutPageLazy/>}/>
            </Routes>
        </Suspense>

    </>);
};

export default Root;
