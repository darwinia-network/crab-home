import { Footer } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import telegram from "../assets/images/telegram.png";
import medium from "../assets/images/medium.png";
import mail from "../assets/images/mail.png";
import github from "../assets/images/github.png";
import discord from "../assets/images/discord.png";
import element from "../assets/images/element.png";
import twitter from "../assets/images/twitter.png";

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
            url: "https://docs.crab.network/",
            title: t(localeKeys.buildersDocs),
          },
          {
            isExternal: true,
            url: "https://crab.subscan.io/",
            title: t(localeKeys.subscanExplorer),
          },
          {
            isExternal: true,
            url: "https://subview.xyz/",
            title: t(localeKeys.subviewExplorer),
          },
          {
            isExternal: true,
            url: "https://apps.darwinia.network/?network=pangolin",
            title: t(localeKeys.pangolinTestNet),
          },
        ],
      },
      {
        title: t(localeKeys.resources),
        links: [
          {
            isExternal: true,
            url: "https://apps.darwinia.network/?network=crab",
            title: t(localeKeys.stakingApps),
          },
          {
            isExternal: true,
            url: "https://crab.subsquare.io/",
            title: t(localeKeys.onChainGovernance),
          },
          {
            isExternal: true,
            url: "https://darwinia-network.github.io/crab-home-v1/plo_contribute",
            title: t(localeKeys.kusamaParachainAuction),
          },
          {
            isExternal: true,
            url: "https://medium.com/darwinianetwork",
            title: t(localeKeys.blog),
          },
          {
            isExternal: true,
            url: "https://itering.notion.site/About-Crab-Network-db5d28d1479540118c1f772ebac5783c",
            title: t(localeKeys.brand),
          },
        ],
      },
      {
        title: t(localeKeys.collaboration),
        links: [
          {
            isExternal: false,
            url: "",
            title: t(localeKeys.substrateBuilderProgram),
            isFake: true,
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.web3GrantProgram),
            isFake: true,
          },
          {
            isExternal: true,
            url: "",
            title: t(localeKeys.darwiniaBuildersProgram),
            isFake: true,
          },
        ],
      },
    ],
    socialNetworks: [
      {
        logo: twitter,
        url: "https://twitter.com/DarwiniaNetwork",
      },
      {
        logo: telegram,
        url: "https://t.me/DarwiniaNetwork",
      },
      {
        logo: discord,
        url: "https://discord.com/invite/aQdK9H4MZS",
      },
      {
        logo: element,
        url: "https://app.element.io/#/room/#darwinia:matrix.org",
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
