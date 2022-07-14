import { Link, StatisticsData, TokenSupply as ITokenSupply } from "../../data/types";
import Feature from "../Feature";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import http from "../../http";
import localeKeys from "../../locale/localeKeys";
import { useTranslation } from "react-i18next";
import { formatBalance } from "../../utils";
import crabCoinImage from "../../assets/images/crab.png";
import cKTONCoinImage from "../../assets/images/ckton.png";

interface Props {
  data: ITokenSupply;
}

interface ISupply {
  circulatingSupply: string;
  initialSupply: string;
  totalSupply: string;
}

interface ServerResponse<T> {
  code: number;
  data: T;
  msg: string;
}

const Supply = ({ data }: Props) => {
  const { t } = useTranslation();
  const [isLoadingTokenData, setLoadingTokenData] = useState(true);
  const [liveTokenStatistics, setLiveTokenStatistics] = useState(data);

  console.log(isLoadingTokenData);

  useEffect(() => {
    // fetchData();
  }, []);

  const prepareTokenStatistics = (title: string, text: string, image: string, supply: ISupply): StatisticsData => {
    const minDecimalPoints = 0;
    const maxDecimalPoints = 0;
    return {
      title,
      image,
      text,
      data: [
        {
          info: t(localeKeys.initialSupply),
          figure:
            supply.initialSupply === "--"
              ? "--"
              : formatBalance(supply.initialSupply, minDecimalPoints, maxDecimalPoints),
        },
        {
          info: t(localeKeys.circulatingSupply),
          figure:
            supply.circulatingSupply === "--"
              ? "--"
              : formatBalance(supply.circulatingSupply, minDecimalPoints, maxDecimalPoints),
        },
        {
          info: t(localeKeys.totalSupply),
          figure:
            supply.totalSupply === "--" ? "--" : formatBalance(supply.totalSupply, minDecimalPoints, maxDecimalPoints),
        },
      ],
    };
  };

  // eslint-disable-next-line no-unused-vars
  const fetchData = async () => {
    try {
      setLoadingTokenData(true);
      setLiveTokenStatistics((oldData) => {
        return {
          ...oldData,
          statisticsData: [],
        };
      });

      const resultsList = await Promise.all([loadRingData(), loadKTonData()]);
      // console.log(resultsList);
      resultsList.forEach((result, index) => {
        if (result.data.code !== 0) {
          /* add some dummy data just for the UI to show up */
          result.data = {
            data: {
              initialSupply: "0", // this will be overridden below
              totalSupply: "--",
              circulatingSupply: "--",
            },
            code: 0,
            msg: "",
          };
        }
        const supply = result.data.data;
        switch (index) {
          case 0: {
            // static number
            supply.initialSupply = "2000000000";
            const crabStatistics = prepareTokenStatistics(
              t(localeKeys.crabCoin),
              t(localeKeys.crabCoinInfo),
              crabCoinImage,
              supply
            );
            setLiveTokenStatistics((oldData) => {
              return {
                ...oldData,
                statisticsData: [...(oldData.statisticsData ?? []), crabStatistics],
              };
            });
            break;
          }
          case 1: {
            // static number
            supply.initialSupply = "--";
            const cKTONStatistics = prepareTokenStatistics(
              t(localeKeys.cKTON),
              t(localeKeys.cKTONInfo),
              cKTONCoinImage,
              supply
            );
            setLiveTokenStatistics((oldData) => {
              return {
                ...oldData,
                statisticsData: [...(oldData.statisticsData ?? []), cKTONStatistics],
              };
            });
            break;
          }
        }
      });
      setLoadingTokenData(false);
    } catch (e) {
      console.log(e);
      setLoadingTokenData(false);
      // ignore the error
    }
  };

  const loadRingData = (): Promise<AxiosResponse<ServerResponse<ISupply>>> => {
    return http.get<ServerResponse<ISupply>>({ path: "/supply/ring" });
  };

  const loadKTonData = (): Promise<AxiosResponse<ServerResponse<ISupply>>> => {
    return http.get<ServerResponse<ISupply>>({ path: "/supply/kton" });
  };

  const crabToken = getCoinStatistics(liveTokenStatistics.statisticsData[0]);
  const cKTONToken = getCoinStatistics(liveTokenStatistics.statisticsData[1]);
  const bottomLinks = getBottomLinks(data.feature.links);
  return (
    <div className={"flex flex-col lg:flex-row lg:gap-[15.625rem]"}>
      <div data-aos={"fade-up"} className={"flex-1"}>
        <Feature data={data.feature} />
      </div>
      <div className={"w-full lg:w-[51.667%] shrink-0"}>
        <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-0"}>
          {crabToken}
        </div>
        <div data-aos={"fade-up"} className={"divider mt-[2.5rem] lg:mt-[3.125rem]"} />
        <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-[3.125rem]"}>
          {cKTONToken}
        </div>
      </div>
      <div data-aos={"fade-up"} className={"lg:hidden mt-[2.5rem]"}>
        {bottomLinks}
      </div>
    </div>
  );
};

const getCoinStatistics = (statisticsData: StatisticsData | undefined) => {
  if (!statisticsData) {
    return null;
  }
  const statisticsInfo = statisticsData.data?.map((item, index) => {
    return (
      <div key={index} className={"flex justify-between mt-[1.875rem] capitalize"}>
        <div>{item.info}</div>
        <div className={"shrink-0"}>{item.figure}</div>
      </div>
    );
  });
  return (
    <div className={"flex flex-col gap-[2.5rem] lg:gap-[3.125rem] lg:flex-row"}>
      <div className={"w-[6.875rem] lg:w-[6.25rem] shrink-0"}>
        <img className={"w-full"} src={statisticsData.image} alt="image" />
      </div>
      <div className={"flex-1"}>
        <div
          className={
            "title text-[1.25rem] leading-[1.625rem] lg:text-[3.125rem] lg:leading-[4.125rem] uppercase text-white"
          }
        >
          {statisticsData.title}
        </div>
        <div className={"mt-[1.25rem]"}>{statisticsData.text}</div>
        <div>{statisticsInfo}</div>
      </div>
    </div>
  );
};

const getBottomLinks = (bottomLinks: Link[] | undefined, isButton = false) => {
  return bottomLinks
    ? bottomLinks.map((link, index) => {
        const key = `${index}-${link.url}`;
        if (link.url === "") {
          return (
            <div className={"mt-[0.625rem]"} key={key}>
              <div className={`opacity-50 capitalize btn border-primary`}>{`${link.title} >`}</div>
            </div>
          );
        }
        if (link.isExternal) {
          return (
            <div className={"mt-[0.625rem]"} key={key}>
              <a
                className={`overflow-hidden capitalize text-white btn border-primary`}
                target="_blank"
                href={link.url}
                rel="noreferrer"
              >
                {`${link.title} >`}
              </a>
            </div>
          );
        }
        return (
          <div key={key}>
            <NavLink className={`capitalize text-white btn border-primary`} to={link.url}>
              {`${link.title} >`}
            </NavLink>
          </div>
        );
      })
    : null;
};

export default Supply;
