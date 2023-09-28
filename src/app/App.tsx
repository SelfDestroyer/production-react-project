import React from 'react';
import {
    Link
} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (<div className={classNames('app', {test: true, added: true}, [])} data-theme={theme}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toggleTheme}>Change theme</button>
        <AppRouter/>
    </div>)
};

export default App;
