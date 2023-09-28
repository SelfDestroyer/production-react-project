import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";

const App = () => {
    const {theme} = useTheme()

    return (<div className={classNames('app', {}, [theme])}>
        <NavBar/>
        <AppRouter/>
    </div>)
};

export default App;
