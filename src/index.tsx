import {createRoot} from 'react-dom/client';
import './styles/index.scss'
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import ThemeProvider from "./theme/ThemeProvider";


const Root = () => <ThemeProvider>
    <RouterProvider router={router}/>
</ThemeProvider>;

const router = createBrowserRouter([{path: "*", Component: App},]);


createRoot(document.getElementById('root')).render(<Root/>);
