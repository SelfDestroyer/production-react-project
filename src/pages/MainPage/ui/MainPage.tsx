import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('Home Page')}</h1>

    </div>
  )
}

export default MainPage
