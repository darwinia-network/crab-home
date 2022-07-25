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
import LoadingSpinner from "../LoadingSpinner";

interface Props {
  data: ITokenSupply;
}

interface ISupply {
  circulatingSupply: string;
  available_balance: string; // this is the 'circulatingSupply'
  initialSupply: string;
  totalSupply: string;
  total_issuance: string; // this is the 'totalSupply'
}

interface Detail {
  detail: {
    CKTON: ISupply;
    CRAB: ISupply;
  };
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

  useEffect(() => {
    fetchData();
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

  const fetchData = async () => {
    try {
      setLoadingTokenData(true);
      setLiveTokenStatistics((oldData) => {
        return {
          ...oldData,
          statisticsData: [],
        };
      });

      const result = await loadTokenData();
      const initialCrabAmount = "2000000000";
      if (result.data.code === 0) {
        // the response was successful

        result.data.data.detail.CRAB.initialSupply = initialCrabAmount;
        result.data.data.detail.CRAB.totalSupply = result.data.data.detail.CRAB.total_issuance;
        result.data.data.detail.CRAB.circulatingSupply = result.data.data.detail.CRAB.available_balance;

        result.data.data.detail.CKTON.initialSupply = "0";
        result.data.data.detail.CKTON.totalSupply = result.data.data.detail.CKTON.total_issuance;
        result.data.data.detail.CKTON.circulatingSupply = result.data.data.detail.CKTON.available_balance;
      } else {
        /* add some dummy data just for the UI to show up */
        result.data = {
          data: {
            detail: {
              CRAB: {
                initialSupply: initialCrabAmount,
                totalSupply: "--",
                circulatingSupply: "--",
                available_balance: "--",
                total_issuance: "--",
              },
              CKTON: {
                initialSupply: "0",
                totalSupply: "--",
                circulatingSupply: "--",
                available_balance: "--",
                total_issuance: "--",
              },
            },
          },
          code: 0,
          msg: "",
        };
      }

      const crabStatistics = prepareTokenStatistics(
        t(localeKeys.crabCoin),
        t(localeKeys.crabCoinInfo),
        crabCoinImage,
        result.data.data.detail.CRAB
      );
      const cKTONStatistics = prepareTokenStatistics(
        t(localeKeys.cKTON),
        t(localeKeys.cKTONInfo),
        cKTONCoinImage,
        result.data.data.detail.CKTON
      );
      setLiveTokenStatistics((oldData) => {
        return {
          ...oldData,
          statisticsData: [crabStatistics, cKTONStatistics],
        };
      });
      setLoadingTokenData(false);
    } catch (e) {
      setLoadingTokenData(false);
      // ignore the error
    }
  };

  const loadTokenData = (): Promise<AxiosResponse<ServerResponse<Detail>>> => {
    return http.get<ServerResponse<Detail>>({ path: "/scan/token" });
  };

  const crabToken = getCoinStatistics(liveTokenStatistics.statisticsData[0]);
  const cKTONToken = getCoinStatistics(liveTokenStatistics.statisticsData[1]);
  const bottomLinks = getBottomLinks(data.feature.links);
  const statistics = (
    <>
      <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-0"}>
        {crabToken}
      </div>
      <div data-aos={"fade-up"} className={"divider mt-[2.5rem] lg:mt-[3.125rem]"} />
      <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-[3.125rem]"}>
        {cKTONToken}
      </div>
    </>
  );
  return (
    <div className={"flex flex-col lg:flex-row lg:gap-[15.625rem]"}>
      <div data-aos={"fade-up"} className={"flex-1"}>
        <Feature data={data.feature} />
      </div>
      <div className={"w-full lg:w-[51.667%] shrink-0"}>{isLoadingTokenData ? <LoadingSpinner /> : statistics}</div>
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
        <div className={"mt-[1.25rem] capitalize"}>{statisticsData.text}</div>
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
