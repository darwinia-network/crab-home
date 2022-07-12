import { CrabToken as ICrabToken, Feature as IFeature, Link } from "../../data/types";
import { NavLink } from "react-router-dom";
import Feature from "../Feature";

interface Props {
  data: ICrabToken;
}

const CrabTokens = ({ data }: Props) => {
  const bottomLinks = getBottomLinks([data.link]);
  const features = getFeatures(data.features);
  const borderAfter = `after:hidden lg:after:block after:absolute after:left-0 after:right-[20px] after:top-0 after:bottom-[20px] after:border after:border-primary`;
  const borderBefore = `before:hidden lg:before:block before:absolute before:left-[20px] before:right-0 before:top-[20px] before:bottom-0 before:border before:border-primary`;

  return (
    <div
      className={`flex capitalize flex-col pt-[4.25rem] pb-[3.125rem] lg:flex-row gap-[2.5rem] lg:gap-[7.3125rem] relative ${borderAfter} ${borderBefore}`}
    >
      <div className={"w-full lg:ml-[12.77%] lg:w-[32.46%] shrink-0"}>
        <div className={"w-[65.07%] lg:w-[74.408%]"}>
          <img src={data.image} alt="image" />
        </div>
        <div className={"title-lg text-white mt-[2.5rem] lg:mt-[1.6875rem]"}>{data.title}</div>
        <div>{data.text}</div>
        <div className={"mt-[2.25rem]"}>{bottomLinks}</div>
      </div>
      <div className={"w-full lg:w-[38.46%] shrink-0"}>{features}</div>
    </div>
  );
};

const getFeatures = (features: IFeature[]) => {
  return features.map((feature, index) => {
    const topMargin = index === 0 ? `` : `mt-[1.875rem] mt-[3.125rem]`;
    return (
      <div key={index} className={`w-full ${topMargin}`}>
        <Feature data={feature} />
      </div>
    );
  });
};

const getBottomLinks = (bottomLinks: Link[] | undefined) => {
  if (!bottomLinks) {
    return null;
  }
  return bottomLinks.map((link, index) => {
    const key = `${index}-${link.url}`;
    if (link.isExternal) {
      return (
        <a key={key} href={link.url} target="_blank" className={"btn capitalize"} rel="noreferrer">
          {`${link.title} >`}
        </a>
      );
    }
    return (
      <NavLink key={key} to={link.url} className={"btn capitalize"}>
        {`${link.title} >`}
      </NavLink>
    );
  });
};

export default CrabTokens;
