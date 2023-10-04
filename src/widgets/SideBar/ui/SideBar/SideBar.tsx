import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSizes, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './SideBar.module.scss'
import { AppLink, IAppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'

interface ISideBarProps {
  className?: string
}

export const SideBar: FC<ISideBarProps> = props => {
  const { className = '' } = props
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { t } = useTranslation()

  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div data-testid={'sidebar'} className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.sideBarItems}>
        <AppLink to={RoutePath.main} className={cls.sideBarItem}>
          <MainIcon className={cls.icon}/>
          <span className={cls.link}>
            {t('Home Page')}
          </span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={IAppLinkTheme.SECONDARY} className={cls.sideBarItem}>
          <AboutIcon className={cls.icon}/>
          <span className={cls.link}>
            {t('About Page')}
          </span>
        </AppLink>
      </div>

      <Button
        onClick={onToggle}
        data-testid={'sidebar-toggle'}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSizes.L}
        square
        className={cls.toggleBtn}>
        {collapsed ? '>' : '<'}

      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.LangSwitcher} short={collapsed}/>
      </div>
    </div>
  )
}
