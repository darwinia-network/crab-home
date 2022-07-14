import { Hero } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useEconomicModelData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  return {
    heroData,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    text: t(localeKeys.internetOfTokens),
  };
};
