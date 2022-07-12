import { Feature as IFeature, FeatureType, Link } from "../../data/types";
import { NavLink } from "react-router-dom";

interface Props {
  data: IFeature;
}

const Feature = ({ data }: Props) => {
  return getFeatureByType(data.type, data);
};

const getFeatureByType = (type: FeatureType, data: IFeature): JSX.Element => {
  switch (type) {
    case 1: {
      return getTypeOneFeature(data);
    }
    case 2: {
      return getTypeTwoFeature(data);
    }
    case 3:
    default: {
      return getTypeThreeFeature(data);
    }
  }
};

const getTypeOneFeature = (data: IFeature): JSX.Element => {
  return (
    <div className={"flex justify-center"}>
      <div className={"flex max-w-[68.5rem] flex-col lg:flex-row lg:items-center lg:gap-[3.75rem]"}>
        <div className={"lg:order-2"}>
          <div data-aos={"fade-up"} className={"title-lg text-white capitalize"}>
            {data.title}
          </div>
          <div data-aos={"fade-up"} className={"mt-[0.625rem] capitalize"}>
            {data.text}
          </div>
        </div>
        <div data-aos={"fade-up"} className={"w-[94.03%] lg:w-[41.97%] shrink-0 lg:order-1 mt-[2.5rem] lg:mt-0"}>
          <img className={"w-full"} src={data.icon} alt="image" />
        </div>
      </div>
    </div>
  );
};

const getTypeTwoFeature = (data: IFeature): JSX.Element => {
  return (
    <div className={"flex justify-center"}>
      <div className={"flex max-w-[62rem] flex-col lg:flex-row lg:items-center lg:gap-[3.75rem]"}>
        <div>
          <div data-aos={"fade-up"} className={"title-lg text-white capitalize"}>
            {data.title}
          </div>
          <div data-aos={"fade-up"} className={"mt-[0.625rem] capitalize"}>
            {data.text}
          </div>
        </div>
        <div data-aos={"fade-up"} className={"w-[76.119%] lg:w-[35.887%] shrink-0 mt-[2.5rem] lg:mt-0"}>
          <img className={"w-full"} src={data.icon} alt="image" />
        </div>
      </div>
    </div>
  );
};

const getTypeThreeFeature = (data: IFeature): JSX.Element => {
  const bottomLinks = getBottomLinks(data.links);
  return (
    <div className={"flex lg:gap-[2.5rem]"}>
      <div className={"w-[10rem] h-[10rem] shrink-0 hidden lg:block"}>
        <img className={"w-full"} src={data.icon} alt="image" />
      </div>
      <div>
        <div className={"title-2 text-white"}>{data.title}</div>
        <div>{data.text}</div>
        <div className={"divider hidden lg:block mt-[0.625rem]"} />
        <div className={"hidden lg:block"}>{bottomLinks}</div>
      </div>
    </div>
  );
};

const getBottomLinks = (bottomLinks: Link[] | undefined) => {
  return bottomLinks
    ? bottomLinks.map((link, index) => {
        const key = `${index}-${link.url}`;
        if (link.url === "") {
          return (
            <div className={"mt-[0.625rem]"} key={key}>
              <div className={`opacity-50 capitalize`}>{`${link.title} >`}</div>
            </div>
          );
        }
        if (link.isExternal) {
          return (
            <div className={"mt-[0.625rem]"} key={key}>
              <a
                className={`overflow-hidden capitalize text-white relative after:absolute after:left-0 after:w-full after:h-[1px] after:bg-white after:bottom-0 after:translate-x-[-101%] hover:after:translate-x-0 after:transition`}
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
            <NavLink className={`capitalize text-white`} to={link.url}>
              {`${link.title} >`}
            </NavLink>
          </div>
        );
      })
    : null;
};

export default Feature;
