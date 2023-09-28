import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({}) => {
    return (<nav className={classNames(cls.navBar)}>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
        </nav>);
};
