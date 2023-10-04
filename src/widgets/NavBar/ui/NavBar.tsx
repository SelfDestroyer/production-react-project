import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = props => {
  return (<div className={classNames(cls.NavBarContainer)}>
    <nav className={classNames(cls.NavBar)}>
      <ul className={classNames(cls.NavBarItems)}>
        <li className={classNames(cls.NavBarItem)}>
        </li>
        <li className={classNames(cls.NavBarItem)}>
        </li>
      </ul>
    </nav>
  </div>)
}
