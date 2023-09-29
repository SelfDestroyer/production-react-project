import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "widgets/Button/Button";

interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
    const {className} = props
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk')

    return (<div className={classNames(cls.LangSwitcher)}>
        <Button onClick={toggleLanguage} theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('language')}
        </Button>
    </div>);
};
