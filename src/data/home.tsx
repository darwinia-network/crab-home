import { CompatibilityPromo, CrabIntro, Hero } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import heroImage from "../assets/images/crab-hero.gif";
import crabIntroImg from "../assets/images/crab-intro.png";
import crabIntroImgMobile from "../assets/images/crab-intro-mobile.png";
import compatibilityImg from "../assets/images/compatibility.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useHomeData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const crabIntroData = getCrabIntro(t);
  const compatibilityPromo = getCompatibilityPromo(t);
  return {
    heroData,
    crabIntroData,
    compatibilityPromo,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 1,
    image: <img src={heroImage} alt="hero image" />,
    text: t(localeKeys.crabIntro),
    links: [
      {
        title: t(localeKeys.buildOnCrab),
        url: "/developers",
        isExternal: false,
        type: "PRIMARY",
      },
      {
        title: t(localeKeys.goToDarwinia),
        url: "https://docs.darwinia.network/",
        isExternal: true,
      },
    ],
  };
};

const getCrabIntro = (t: TFunction<"translation">): CrabIntro => {
  return {
    title: t(localeKeys.whatIsCrab),
    image: crabIntroImg,
    imageMobile: crabIntroImgMobile,
    content: {
      text: t(localeKeys.crabDescriptionsText),
      list: [
        t(localeKeys.crabDescriptionsItemOne),
        t(localeKeys.crabDescriptionsItemTwo),
        t(localeKeys.crabDescriptionsItemThree),
      ],
    },
  };
};

const getCompatibilityPromo = (t: TFunction<"translation">): CompatibilityPromo => {
  return {
    title: t(localeKeys.ethereumCompatibility),
    image: compatibilityImg,
    text: t(localeKeys.compatibilityText),
    left: [
      t(localeKeys.compatibilityTextOne),
      t(localeKeys.compatibilityTextTwo),
      t(localeKeys.compatibilityTextThree),
      t(localeKeys.compatibilityTextFour),
    ],
    right: [
      t(localeKeys.compatibilityTextFive),
      t(localeKeys.compatibilityTextSix),
      t(localeKeys.compatibilityTextSeven),
    ],
  };
};
