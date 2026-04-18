import { useLang } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export const useTranslation = () => {
  const { lang } = useLang()
  return translations[lang]
}
