import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (<div className={classNames('app', {test: true, added: true}, [theme])}>
        <NavBar/>
        <button onClick={toggleTheme}>Change theme</button>
        <AppRouter/>
    </div>)
};

export default App;
