import { Feature, GrantsProgramResource, Hero, PurposeAndMission, WhyApplying } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import coinsPileImage from "../assets/images/coins-pile.png";
import purposeImage from "../assets/images/purpose.png";
import missionImage from "../assets/images/mission.png";
import toolingAndInfrastructureImage from "../assets/images/tooling-and-infrastructure.png";
import ecosystemProjectsImage from "../assets/images/ecosystem-projects.png";
import developerToolsIcon from "../assets/images/dev-tools.png";
import endToEndIcon from "../assets/images/end-to-end.png";
import businessDevelopmentIcon from "../assets/images/business-development.png";
import multiChainIcon from "../assets/images/multi-chain.png";
import scalabilityIcon from "../assets/images/scalability.png";
import experimentationIcon from "../assets/images/experimentation.png";
import enthusiasmIcon from "../assets/images/enthusiasm.png";
import winWinIcon from "../assets/images/win-win.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useGrantsProgramData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const purposeAndMission = getPurposeAndMission(t);
  const toolingAndInfrastructure = getToolingAndInfrastructure(t);
  const ecosystemProjects = getEcosystemProjects(t);
  const grantsProgramResource = getGrantsProgramResource(t);
  const reasonsToApply = getReasonsToApply(t);
  return {
    heroData,
    purposeAndMission,
    toolingAndInfrastructure,
    ecosystemProjects,
    grantsProgramResource,
    reasonsToApply,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    text: t(localeKeys.grantsProgramText),
    links: [
      {
        title: t(localeKeys.startApplication),
        url: "https://www.google.com",
        isExternal: true,
      },
    ],
  };
};

const getPurposeAndMission = (t: TFunction<"translation">): PurposeAndMission => {
  return {
    title: t(localeKeys.purposeAndMission),
    grantsAmount: {
      type: 6,
      icon: coinsPileImage,
      title: t(localeKeys.grantsAmount),
      list: [
        t(localeKeys.grantsAmountTextOne),
        t(localeKeys.grantsAmountTextTwo),
        t(localeKeys.grantsAmountTextThree),
        t(localeKeys.grantsAmountTextFour),
      ],
    },
    mission: {
      type: 7,
      icon: missionImage,
      text: t(localeKeys.missionText),
      title: t(localeKeys.mission),
    },
    purpose: {
      type: 7,
      icon: purposeImage,
      text: t(localeKeys.purposeText),
      title: t(localeKeys.purpose),
    },
  };
};

const getToolingAndInfrastructure = (t: TFunction<"translation">): Feature => {
  return {
    type: 8,
    title: t(localeKeys.toolingAndInfrastructure),
    text: t(localeKeys.toolingAndInfrastructureText),
    icon: toolingAndInfrastructureImage,
  };
};

const getEcosystemProjects = (t: TFunction<"translation">): Feature => {
  return {
    type: 9,
    title: t(localeKeys.ecosystemProject),
    text: t(localeKeys.ecosystemProjectText),
    icon: ecosystemProjectsImage,
  };
};

const getGrantsProgramResource = (t: TFunction<"translation">): GrantsProgramResource => {
  return {
    title: t(localeKeys.grantsProgramsResources),
    resources: [
      {
        icon: developerToolsIcon,
        title: t(localeKeys.devTools),
        text: t(localeKeys.devToolsText),
        type: 10,
      },
      {
        icon: endToEndIcon,
        title: t(localeKeys.endToEndSupport),
        text: t(localeKeys.endToEndSupportText),
        type: 10,
      },
      {
        icon: businessDevelopmentIcon,
        title: t(localeKeys.businessDevelopment),
        text: t(localeKeys.businessDevelopmentText),
        type: 10,
      },
    ],
  };
};

const getReasonsToApply = (t: TFunction<"translation">): WhyApplying => {
  return {
    title: t(localeKeys.whyYouShouldApply),
    reasons: [
      {
        icon: multiChainIcon,
        title: t(localeKeys.multiChain),
        text: t(localeKeys.multiChainText),
        type: 11,
      },
      {
        icon: scalabilityIcon,
        title: t(localeKeys.scalability),
        text: t(localeKeys.scalabilityText),
        type: 11,
      },
      {
        icon: experimentationIcon,
        title: t(localeKeys.experimentation),
        text: t(localeKeys.experimentationText),
        type: 11,
      },
      {
        icon: enthusiasmIcon,
        title: t(localeKeys.enthusiasm),
        text: t(localeKeys.enthusiasmText),
        type: 11,
      },
      {
        icon: winWinIcon,
        title: t(localeKeys.winWin),
        text: t(localeKeys.winWinText),
        type: 11,
      },
    ],
  };
};
