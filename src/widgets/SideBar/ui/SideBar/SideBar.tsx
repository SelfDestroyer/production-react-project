import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import cls from './SideBar.module.scss'

interface ISideBarProps {
    className?: string
}

export const SideBar: FC<ISideBarProps> = (props) => {
    const {className} = props
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(prevState => !prevState)

    return (<div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.LangSwitcher}/>
            </div>
        </div>
    );
};

