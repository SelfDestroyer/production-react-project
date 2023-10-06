import { type FC, useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'

interface INavBarProps {
  className?: string
}

export const NavBar: FC<INavBarProps> = props => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  const onOpenAuthModalHandler = useCallback(
    (): void => { setIsAuthModalOpen(prevState => !prevState) }
    ,
    []
  )

  return (
    <div className={classNames(cls.NavBarContainer)}>
      <Modal isOpen={isAuthModalOpen} onClose={onOpenAuthModalHandler}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>asdadsasd</p>
      </Modal>
      <nav className={classNames(cls.NavBar)}>
        <ul className={classNames(cls.NavBarItems)}>
          <li className={classNames(cls.NavBarItem)}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenAuthModalHandler}>
              {t('SingIn')}
            </Button>
          </li>
          <li className={classNames(cls.NavBarItem)}>
          </li>
        </ul>
      </nav>
    </div>)
}
