import React from "react";
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";
import './styles/index.scss'


const Root = () => <ThemeProvider>
    <RouterProvider router={router}/>
</ThemeProvider>;

const router = createBrowserRouter([{path: "*", Component: App},]);

createRoot(document.getElementById('root')).render(<Root/>);
