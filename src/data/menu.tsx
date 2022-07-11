import { Menu } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useMenuData = () => {
  const { t } = useTranslation();
  const menu = getMenu(t);
  return {
    menu,
  };
};

const getMenu = (t: TFunction<"translation">): Menu[] => {
  return [
    {
      title: t(localeKeys.home),
      path: "/",
    },
    {
      title: t(localeKeys.economicModel),
      path: "/developers",
    },
    {
      title: t(localeKeys.docs),
      path: "/tokens",
    },
    {
      title: t(localeKeys.grantsProgram),
      path: "/community",
    },
  ];
};
