import { Footer } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import telegram from "../assets/images/telegram.png";
import medium from "../assets/images/medium.png";
import mail from "../assets/images/mail.png";
import github from "../assets/images/github.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useFooterData = () => {
  const { t } = useTranslation();
  const footerData = getFooterData(t);
  return {
    footerData,
  };
};

const getFooterData = (t: TFunction<"translation">): Footer => {
  const year = new Date().getFullYear();
  return {
    copyright: <div dangerouslySetInnerHTML={{ __html: t(localeKeys.crabNetworkCopyright, { year }) }} />,
    referenceLinks: [
      {
        title: t(localeKeys.developers),
        links: [
          {
            isExternal: true,
            url: "https://docs.darwinia.network/",
            title: t(localeKeys.darwiniaNetwork),
          },
          {
            isExternal: false,
            url: "/developers",
            title: t(localeKeys.darwiniaApps),
          },
          {
            isExternal: false,
            url: "/developers",
            title: t(localeKeys.subscanExplorer),
          },
          {
            isExternal: false,
            url: "/developers",
            title: t(localeKeys.helixBridge),
          },
          {
            isExternal: false,
            url: "/developers",
            title: t(localeKeys.evolutionLand),
          },
        ],
      },
      {
        title: t(localeKeys.useCases),
        links: [
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.gitHub),
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.buildersDocs),
          },
        ],
      },
      {
        title: t(localeKeys.resources),
        links: [
          {
            isExternal: false,
            url: "/papers",
            title: t(localeKeys.substrateBuilderProgram),
          },
          {
            isExternal: true,
            url: "https://docs.darwinia.network/",
            title: t(localeKeys.web3GrantProgram),
          },
          {
            isExternal: true,
            url: "https://www.notion.so/itering/9617e154ec884b07a7cee9a056374e42?v=0c3e4d9f257646c486a32a0425ee3a93",
            title: t(localeKeys.darwiniaBuildersProgram),
          },
        ],
      },
    ],
    socialNetworks: [
      {
        logo: telegram,
        url: "https://t.me/DarwiniaNetwork",
      },
      {
        logo: github,
        url: "https://github.com/darwinia-network",
      },
      {
        logo: medium,
        url: "https://medium.com/darwinianetwork",
      },
      {
        logo: mail,
        url: "mailto:hello@darwinia.network",
      },
    ],
  };
};
