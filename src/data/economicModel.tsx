import { Hero, RevenueModel, StakingModel, TokenInflation, TokenSupply } from "./types";
import { TFunction, useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
import stakingModelIcon from "../assets/images/staking-model.png";
import stakingBasicModelImage from "../assets/images/staking-basic-model.png";
import stakingAdvancedModelImage from "../assets/images/staking-advanced-model.png";
import supplyIcon from "../assets/images/supply.png";
import crabCoinImage from "../assets/images/crab.png";
import cKTONCoinImage from "../assets/images/ckton.png";
import crabInflationIcon from "../assets/images/crab-inflation-icon.png";
import totalSupplyGraph from "../assets/images/total-supply-graph.png";
import annualInflationGraph from "../assets/images/annual-inflation-graph.png";
import revenueModelIcon from "../assets/images/revenue-model-icon.png";
import networkExpenseImage from "../assets/images/network-expense.png";
import networkRevenueImage from "../assets/images/network-revenue.png";

/* make sure you use a custom hook here since we have to use the useTranslation hook
 * from react-i18next */
export const useEconomicModelData = () => {
  const { t } = useTranslation();
  const heroData = getHero(t);
  const stakingModel = getStakingModel(t);
  const supplyStatistics = getSupplyStatistics(t);
  const tokenInflation = getTokenInflation(t);
  const revenueModel = getRevenueModel(t);
  return {
    heroData,
    stakingModel,
    supplyStatistics,
    tokenInflation,
    revenueModel,
  };
};

const getHero = (t: TFunction<"translation">): Hero => {
  return {
    type: 2,
    text: t(localeKeys.internetOfTokens),
  };
};

const getStakingModel = (t: TFunction<"translation">): StakingModel => {
  return {
    feature: {
      type: 4,
      title: t(localeKeys.stakingModel),
      text: t(localeKeys.stakingModelText),
      icon: stakingModelIcon,
    },
    basicModel: {
      title: t(localeKeys.basicModel),
      text: t(localeKeys.basicModelText),
      image: stakingBasicModelImage,
    },
    advancedModel: {
      title: t(localeKeys.advancedModel),
      text: t(localeKeys.advancedModelText),
      image: stakingAdvancedModelImage,
    },
  };
};

const getSupplyStatistics = (t: TFunction<"translation">): TokenSupply => {
  return {
    feature: {
      type: 4,
      title: t(localeKeys.supply),
      text: t(localeKeys.supplyText),
      icon: supplyIcon,
      links: [
        {
          title: t(localeKeys.accurateData),
          url: "https://www.google.com",
          isExternal: true,
        },
      ],
    },
    statisticsData: [
      {
        text: t(localeKeys.crabCoinInfo),
        image: crabCoinImage,
        title: t(localeKeys.crabCoin),
        data: [
          {
            info: t(localeKeys.initialSupply),
            figure: "2,000,000,000",
          },
          {
            info: t(localeKeys.circulatingSupply),
            figure: "1,612,623,459",
          },
          {
            info: t(localeKeys.totalSupply),
            figure: "2,150,689,732",
          },
        ],
      },
      {
        text: t(localeKeys.cKTONInfo),
        image: cKTONCoinImage,
        title: t(localeKeys.cKTON),
        data: [
          {
            info: t(localeKeys.initialSupply),
            figure: "--",
          },
          {
            info: t(localeKeys.circulatingSupply),
            figure: "57,305",
          },
          {
            info: t(localeKeys.totalSupply),
            figure: "186,560",
          },
        ],
      },
    ],
  };
};

const getTokenInflation = (t: TFunction<"translation">): TokenInflation => {
  return {
    feature: {
      type: 4,
      title: t(localeKeys.crabInflationModel),
      text: t(localeKeys.crabInflationModelText),
      icon: crabInflationIcon,
    },
    totalSupplyImage: totalSupplyGraph,
    annualInflationImage: annualInflationGraph,
    text: t(localeKeys.inflationGraphText),
  };
};

const getRevenueModel = (t: TFunction<"translation">): RevenueModel => {
  return {
    feature: {
      type: 4,
      title: t(localeKeys.revenueModel),
      icon: revenueModelIcon,
    },
    networkRevenue: {
      title: t(localeKeys.networkRevenue),
      type: 5,
      icon: networkRevenueImage,
      list: [
        t(localeKeys.networkRevenueTextOne),
        t(localeKeys.networkRevenueTextTwo),
        t(localeKeys.networkRevenueTextThree),
      ],
    },
    networkExpense: {
      title: t(localeKeys.networkExpense),
      type: 5,
      icon: networkExpenseImage,
      list: [t(localeKeys.networkExpenseTextOne), t(localeKeys.networkExpenseTextTwo)],
    },
  };
};
