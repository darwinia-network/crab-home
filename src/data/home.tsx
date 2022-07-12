import { BridgeMessaging, CompatibilityPromo, CrabIntro, CrabToken, EasyDeploy, FeatureWrapper, Hero } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import heroImage from "../assets/images/crab-hero.gif";
import crabIntroImg from "../assets/images/crab-intro.png";
import crabIntroImgMobile from "../assets/images/crab-intro-mobile.png";
import compatibilityImg from "../assets/images/compatibility.png";
import bridgeMessagingImg from "../assets/images/bridge-messaging.png";
import easyDeployImg from "../assets/images/easy-deploy.png";
import nftImg from "../assets/images/nft.png";
import communityDriven from "../assets/images/community-driven.png";
import crabToken from "../assets/images/crab-token.png";
import transactionImg from "../assets/images/transaction-icon.png";
import governanceImg from "../assets/images/governance-icon.png";
import stakingImg from "../assets/images/staking-icon.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useHomeData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const crabIntroData = getCrabIntro(t);
  const compatibilityPromo = getCompatibilityPromo(t);
  const bridgeMessaging = getBridgeMessaging(t);
  const easyDeploy = getEasyDeploy(t);
  const crabPromoFeature = getCrabPromoFeature(t);
  const crabToken = getCrabToken(t);
  return {
    heroData,
    crabIntroData,
    compatibilityPromo,
    bridgeMessaging,
    easyDeploy,
    crabPromoFeature,
    crabToken,
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

const getBridgeMessaging = (t: TFunction<"translation">): BridgeMessaging => {
  return {
    title: t(localeKeys.bridgeMessagingService),
    image: bridgeMessagingImg,
    text: t(localeKeys.bridgeMessagingServiceText),
  };
};

const getEasyDeploy = (t: TFunction<"translation">): EasyDeploy => {
  return {
    title: t(localeKeys.easyEntranceToKusama),
    image: easyDeployImg,
    subTitle: t(localeKeys.quicklyDeployDApps),
    list: [t(localeKeys.quicklyDeployTextOne), t(localeKeys.quicklyDeployTextTwo)],
  };
};

const getCrabPromoFeature = (t: TFunction<"translation">): FeatureWrapper => {
  return {
    title: "",
    links: [],
    pcGrid: 1,
    data: [
      {
        title: t(localeKeys.oasisForMetaverse),
        links: [],
        icon: nftImg,
        text: t(localeKeys.oasisForMetaverseText),
        type: 1,
      },
      {
        title: t(localeKeys.communityDriven),
        links: [],
        icon: communityDriven,
        text: t(localeKeys.communityDrivenText),
        type: 2,
      },
    ],
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

const getCrabToken = (t: TFunction<"translation">): CrabToken => {
  return {
    title: t(localeKeys.crabTokens),
    image: crabToken,
    text: t(localeKeys.crabTokensIntro),
    link: {
      type: "PLAIN",
      title: t(localeKeys.learnMore),
      url: "",
      isExternal: true,
    },
    features: [
      {
        title: t(localeKeys.transaction),
        text: t(localeKeys.transactionText),
        type: 3,
        icon: transactionImg,
        links: [
          {
            title: t(localeKeys.learnMore),
            url: "https://google.com",
            isExternal: true,
          },
        ],
      },
      {
        title: t(localeKeys.governance),
        text: t(localeKeys.governanceText),
        type: 3,
        icon: governanceImg,
        links: [
          {
            title: t(localeKeys.learnMore),
            url: "https://google.com",
            isExternal: true,
          },
        ],
      },
      {
        title: t(localeKeys.staking),
        text: t(localeKeys.stakingText),
        type: 3,
        icon: stakingImg,
        links: [
          {
            title: t(localeKeys.learnMore),
            url: "https://google.com",
            isExternal: true,
          },
        ],
      },
    ],
  };
};
