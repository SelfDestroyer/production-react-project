import React, {FC, PropsWithChildren} from 'react';
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'

export enum IAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends PropsWithChildren, LinkProps {
    className?: string;
    theme?: IAppLinkTheme

}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {children, to, className, theme = IAppLinkTheme.PRIMARY, ...otherProps} = props
    return (<Link to={to} className={classNames(cls.AppLink, {}, [cls[theme]])} {...otherProps}>
            {children}
        </Link>);
};
