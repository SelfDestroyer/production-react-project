import React from 'react';
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Root from "./Root";


const router = createBrowserRouter([{path: "*", Component: Root},]);

const App = () => {
    return <RouterProvider router={router}/>;
};

export default App;
