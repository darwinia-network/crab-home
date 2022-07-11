import { Feature as IFeature, Link } from "../../data/types";
import { NavLink } from "react-router-dom";

interface Props {
  data: IFeature;
  pcGrid: number;
}

const Feature = ({ data, pcGrid }: Props) => {
  const { type, text, icon, title, links: bottomLinks } = data;
  const bottomDivider = type === 2 ? <div className={"divider mt-[1.25rem]"} /> : null;
  const linksCustomClass = getLinkClassByType(type);
  const links = getBottomLinks(bottomLinks);
  const parentTypeClasses = getWrapperGrid(pcGrid);
  const childTypeClasses = getChildWidthByGrid(pcGrid);
  const titleJSX = title ? <div className={"title text-white capitalize mt-[1.25rem]"}>{title}</div> : null;
  return (
    <div className={`flex shrink-0 ${parentTypeClasses} inter-block-space-2`}>
      <div className={`${childTypeClasses}`}>
        <img className={"w-[5rem] self-start"} src={icon} alt="icon" />
        {titleJSX}
        <div className={"divider mt-[1.25rem]"} />
        <div className={"capitalize mt-[1.25rem]"}>{text}</div>
        {bottomDivider}
        <div className={`flex text-white ${linksCustomClass}`}>{links}</div>
      </div>
    </div>
  );
};
const getLinkClassByType = (type: number) => {
  switch (type) {
    case 3: {
      return `flex-col mt-[1.25rem] gap-[1.25rem]`;
    }
    case 4: {
      return `flex-wrap gap-[1.25rem] mt-[1.25rem] text-white`;
    }
    default: {
      return `flex-wrap gap-[1.25rem] mt-[1.25rem]`;
    }
  }
};

const getChildWidthByGrid = (pcGrid: number) => {
  switch (pcGrid) {
    case 3: {
      return `w-full lg:w-[85%]`;
    }
    case 4: {
      return `w-full lg:w-[86%]`;
    }
    default: {
      return `w-full`;
    }
  }
};

const getWrapperGrid = (pcGrid: number) => {
  switch (pcGrid) {
    case 3: {
      return `lg:w-[33.33%] lg:justify-center lg:3n-2:justify-start lg:3n:justify-end`;
    }
    case 4: {
      return `lg:w-[25%] lg:justify-center lg:4n-3:justify-start lg:4n:justify-end`;
    }
    case 2:
    default: {
      return `lg:w-[50%] lg:odd:pr-[1.875rem] lg:even:pl-[1.875rem]`;
    }
  }
};

const getBottomLinks = (bottomLinks: Link[] | undefined) => {
  return bottomLinks
    ? bottomLinks.map((link, index) => {
        const key = `${index}-${link.url}`;
        if (link.url === "") {
          return (
            <div key={key}>
              <div className={`opacity-50 capitalize`}>{link.title}</div>
            </div>
          );
        }
        if (link.isExternal) {
          return (
            <div key={key}>
              <a className={`hover:opacity-70 capitalize`} target="_blank" href={link.url} rel="noreferrer">
                {link.title}
              </a>
            </div>
          );
        }
        return (
          <div key={key}>
            <NavLink className={`hover:opacity-70 capitalize`} to={link.url}>
              {link.title}
            </NavLink>
          </div>
        );
      })
    : null;
};

export default Feature;
