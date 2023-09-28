import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";

const App = () => {
    const {theme} = useTheme()

    return (<div className={classNames('app', {}, [theme])}>
        <NavBar/>
        <div className={'content-page'}>
            <SideBar/>
            <AppRouter/>
        </div>
    </div>)
};

export default App;
