import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./translations/enUS";
import zhCN from "./translations/zhCN";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      enUS: {
        translation: enUS,
      },
      zhCN: {
        translation: zhCN,
      },
    },
    fallbackLng: "enUS",
  })
  .then(() => {
    // ignore
  })
  .catch(() => {
    // ignore
  });
export default i18n;
