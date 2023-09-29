import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { AppLink, IAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = props => {
  const { t } = useTranslation()

  return (<div className={classNames(cls.NavBarContainer)}>
    <nav className={classNames(cls.NavBar)}>
      <ul className={classNames(cls.NavBarItems)}>
        <li className={classNames(cls.NavBarItem)}>
          <AppLink to={'/'}>{t('Home Page')}</AppLink>
        </li>
        <li className={classNames(cls.NavBarItem)}>
          <AppLink to={'/about'} theme={IAppLinkTheme.SECONDARY}>{t('About Page')}</AppLink>
        </li>
      </ul>
    </nav>
  </div>)
}
