import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink, IAppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
interface INavBarProps {
    className?: string
}

export const NavBar: FC<INavBarProps> = ({}) => {
    return (<div className={classNames(cls.NavBarContainer)}>
        <ThemeSwitcher/>
        <nav>
            <ul className={classNames(cls.NavBarItems)}>
                <li className={classNames(cls.NavBarItem)}>
                    <AppLink to={'/'}>Home</AppLink>
                </li>
                <li className={classNames(cls.NavBarItem)}>
                    <AppLink to={'/about'} theme={IAppLinkTheme.SECONDARY}>About</AppLink>
                </li>
            </ul>
        </nav>
    </div>);
};
