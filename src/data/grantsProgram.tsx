import { Feature, Hero, PurposeAndMission } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import coinsPileImage from "../assets/images/coins-pile.png";
import purposeImage from "../assets/images/purpose.png";
import missionImage from "../assets/images/mission.png";
import toolingAndInfrastructureImage from "../assets/images/tooling-and-infrastructure.png";
import ecosystemProjectsImage from "../assets/images/ecosystem-projects.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useGrantsProgramData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const purposeAndMission = getPurposeAndMission(t);
  const toolingAndInfrastructure = getToolingAndInfrastructure(t);
  const ecosystemProjects = getEcosystemProjects(t);
  return {
    heroData,
    purposeAndMission,
    toolingAndInfrastructure,
    ecosystemProjects,
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
