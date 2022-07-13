import {
  BridgeMessaging,
  CompatibilityPromo,
  CrabIntro,
  CrabToken,
  DeveloperTools,
  EasyDeploy,
  FeatureWrapper,
  Hero,
  Slider,
} from "./types";
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
import subscanLogo from "../assets/images/company-logos/subscan.png";
import subviewLogo from "../assets/images/company-logos/subview.png";
import onfinalityLogo from "../assets/images/company-logos/onfinality.png";
import dwellirLogo from "../assets/images/company-logos/dwellir.png";
import evolutionLandLogo from "../assets/images/company-logos/evolution-land.png";
import snowswapLogo from "../assets/images/company-logos/snowswap.png";
import subswapLogo from "../assets/images/company-logos/subswap.png";
import snapshotLogo from "../assets/images/company-logos/snapshot.png";
import polkadotJSLogo from "../assets/images/company-logos/polkadot-js.png";
import mathWalletLogo from "../assets/images/company-logos/math.png";
import crustLogo from "../assets/images/company-logos/crust.png";
import cBridgeLogo from "../assets/images/company-logos/c-bridge.png";
import helixLogo from "../assets/images/company-logos/helix.png";
import crabMetaverseLogo from "../assets/images/company-logos/crab-metaverse.png";
import metarockLogo from "../assets/images/company-logos/metarock.png";
import myweb3Logo from "../assets/images/company-logos/myweb3.png";
import entity54Logo from "../assets/images/company-logos/entity-54.png";
import metamaskLogo from "../assets/images/company-logos/metamask.png";
import openzeppelinLogo from "../assets/images/company-logos/openzeppelin.png";
import theGraphLogo from "../assets/images/company-logos/the-graph.png";
import hardhatLogo from "../assets/images/company-logos/hardhat.png";
import waffleLogo from "../assets/images/company-logos/waffle.png";
import remixLogo from "../assets/images/company-logos/remix.png";
import web3PYLogo from "../assets/images/company-logos/web3-py.png";
import web3JSLogo from "../assets/images/company-logos/web3-js.png";
import etherJSLogo from "../assets/images/company-logos/ethers-js.png";
import bwarelabsLogo from "../assets/images/company-logos/bwarelabs.png";
import ethsignLogo from "../assets/images/company-logos/ethsign.png";
import marsLogo from "../assets/images/company-logos/mars.png";

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
  const companySlider = getCompanySlider();
  const developerTools = getDeveloperTools(t);
  return {
    heroData,
    crabIntroData,
    compatibilityPromo,
    bridgeMessaging,
    easyDeploy,
    crabPromoFeature,
    crabToken,
    companySlider,
    developerTools,
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

const getCompanySlider = (): Slider => {
  return {
    top: [
      {
        logo: subscanLogo,
        link: "https://google.com",
      },
      {
        logo: subviewLogo,
        link: "https://google.com",
      },
      {
        logo: onfinalityLogo,
        link: "https://google.com",
      },
      {
        logo: dwellirLogo,
        link: "https://google.com",
      },
      {
        logo: evolutionLandLogo,
        link: "https://google.com",
      },
      {
        logo: snowswapLogo,
        link: "https://google.com",
      },
      {
        logo: subswapLogo,
        link: "https://google.com",
      },
      {
        logo: snapshotLogo,
        link: "https://google.com",
      },
      {
        logo: polkadotJSLogo,
        link: "https://google.com",
      },
    ],
    bottom: [
      {
        logo: mathWalletLogo,
        link: "https://google.com",
      },
      {
        logo: crustLogo,
        link: "https://google.com",
      },
      {
        logo: cBridgeLogo,
        link: "https://google.com",
      },
      {
        logo: helixLogo,
        link: "https://google.com",
      },
      {
        logo: crabMetaverseLogo,
        link: "https://google.com",
      },
      {
        logo: metarockLogo,
        link: "https://google.com",
      },
      {
        logo: myweb3Logo,
        link: "https://google.com",
      },
      {
        logo: entity54Logo,
        link: "https://google.com",
      },
      {
        logo: metamaskLogo,
        link: "https://google.com",
      },
    ],
  };
};

const getDeveloperTools = (t: TFunction<"translation">): DeveloperTools => {
  return {
    title: t(localeKeys.developerTools),
    logos: [
      {
        logo: metamaskLogo,
        link: "https://google.com",
      },
      {
        logo: openzeppelinLogo,
        link: "https://google.com",
      },
      {
        logo: theGraphLogo,
        link: "https://google.com",
      },
      {
        logo: hardhatLogo,
        link: "https://google.com",
      },
      {
        logo: waffleLogo,
        link: "https://google.com",
      },
      {
        logo: remixLogo,
        link: "https://google.com",
      },
      {
        logo: subscanLogo,
        link: "https://google.com",
      },
      {
        logo: polkadotJSLogo,
        link: "https://google.com",
      },
      {
        logo: web3PYLogo,
        link: "https://google.com",
      },
      {
        logo: web3JSLogo,
        link: "https://google.com",
      },
      {
        logo: etherJSLogo,
        link: "https://google.com",
      },
      {
        logo: onfinalityLogo,
        link: "https://google.com",
      },
      {
        logo: bwarelabsLogo,
        link: "https://google.com",
      },
      {
        logo: ethsignLogo,
        link: "https://google.com",
      },
      {
        logo: marsLogo,
        link: "https://google.com",
      },
      {
        logo: subviewLogo,
        link: "https://google.com",
      },
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
