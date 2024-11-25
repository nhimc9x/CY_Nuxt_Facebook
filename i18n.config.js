import vi from '~/lang/vi'
import en from "~/lang/en";
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        vi: vi,
        en: en
    }
}))
