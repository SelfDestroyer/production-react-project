import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import cls from './SideBar.module.scss'

interface ISideBarProps {
  className?: string
}

export const SideBar: FC<ISideBarProps> = props => {
  const { className = '' } = props
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div data-testid={'sidebar'} className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])} >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <button type={'button'} onClick={onToggle} data-testid={'sidebar-toggle'}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.LangSwitcher}/>
      </div>
    </div>
  )
}
