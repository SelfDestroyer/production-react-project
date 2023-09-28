import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface ISideBarProps {

}

export const SideBar: FC<ISideBarProps> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle =() => setCollapsed(prevState => !prevState)

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

