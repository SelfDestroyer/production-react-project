import React from "react";
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./app/App";
import './app/styles/index.scss'
import {ThemeProvider} from "app/providers/ThemeProvider";


const Root = () => <ThemeProvider>
    <RouterProvider router={router}/>
</ThemeProvider>;

const router = createBrowserRouter([{path: "*", Component: App},]);

createRoot(document.getElementById('root')).render(<Root/>);
