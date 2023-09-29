import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from "./app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";
import './app/styles/index.scss'
import './shared/config/i18n/i18n'


const Root = () => <ThemeProvider>
    <RouterProvider router={router}/>
</ThemeProvider>;

const router = createBrowserRouter([{path: "*", Component: App},]);

createRoot(document.getElementById('root')).render(<Root/>);
