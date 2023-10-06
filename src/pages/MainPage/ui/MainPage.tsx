import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('Home Page')}</h1>
      <Counter/>
    </div>
  )
}

export default MainPage
