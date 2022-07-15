import { Hero as IHero, HeroType, Link, Page, SocialNetwork } from "../../data/types";
import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import homeHeroBg from "../../assets/images/home-hero-bg.png";

interface Props {
  data: IHero;
  page: Page;
}

const Hero = ({ data, page }: Props) => {
  const links = getLinks(data.links);
  const text = getText(data.text, data.type);
  const image = getImage(data.image);
  const socialNetworkLinks = getSocialNetworkLinks(data.socialNetworks);
  const imageClass = data.type === 1 ? `hero-image-1` : `hidden`;
  const textClass = data.type === 1 ? `lg:w-[43.083%]` : `flex-1`;
  const topSpace = page === "HOME" ? `space-top-1` : `space-top-2`;
  const Typewriter = getTypewriterByPage(page);
  const customStyle = page === "HOME" ? { backgroundImage: `url(${homeHeroBg})` } : {};
  const wrapperCustomClass = page === "HOME" ? `pb-[0.5625rem] lg:pb-[7.8125rem]` : ``;
  /* const News = page === "HOME" ? getHomepageNewsTicker() : null;
  const newsTicker =
    News !== null ? (
      <Suspense>
        <News />
      </Suspense>
    ) : null; */
  return (
    <div style={customStyle} className={`lg:bg-center bg-cover bg-no-repeat ${wrapperCustomClass}`}>
      <div data-aos={"fade-up"} className={`container ${topSpace}`}>
        <div className={"flex flex-col lg:flex-row justify-between relative"}>
          <div className={`order-2 flex flex-col relative z-20 lg:justify-center lg:order-1 ${textClass}`}>
            {/* {newsTicker} */}
            <Suspense>
              <Typewriter />
            </Suspense>
            {text}
            {links}
            {socialNetworkLinks}
          </div>
          <div className={`order-1 flex-1 lg:order-2 lg:flex-initial ${imageClass}`}>{image}</div>
        </div>
      </div>
    </div>
  );
};

const getTypewriterByPage = (page: Page) => {
  switch (page) {
    case "ECONOMIC_MODEL": {
      return lazy(() => import("../EconomicModelTypewriter"));
    }
    case "GRANTS_PROGRAM": {
      return lazy(() => import("../GrantsProgramTypewriter"));
    }
    case "HOME":
    default: {
      return lazy(() => import("../HomeTypewriter"));
    }
  }
};

const getText = (text: string | undefined, type: HeroType) => {
  if (!text) {
    return null;
  }
  const typeClass =
    type === 1
      ? `before:hidden lg:before:block before:content-['>'] before:absolute before:-left-[18px] pb-[1.25rem] lg:pb-[1.875rem]`
      : `pt-[0.625rem]`;
  return <div className={`text relative capitalize ${typeClass}`}>{text}</div>;
};

const getLinks = (links: Link[] | undefined) => {
  if (!links) {
    return null;
  }
  const linksJSX = links.map((link, index) => {
    const key = `${index}-${link.url}`;
    const linkTypeClass = link.type === "PRIMARY" ? `btn-primary` : "btn";
    if (link.isExternal) {
      return (
        <a key={key} href={link.url} target="_blank" className={`${linkTypeClass} capitalize`} rel="noreferrer">
          {link.title}
        </a>
      );
    }
    return (
      <NavLink className={`${linkTypeClass} capitalize`} key={key} to={link.url}>
        {link.title}
      </NavLink>
    );
  });
  return <div className={"flex-wrap mt-[1.875rem] flex gap-[1.25rem]"}>{linksJSX}</div>;
};

const getSocialNetworkLinks = (socialNetworkLinks: SocialNetwork[] | undefined) => {
  if (!socialNetworkLinks) {
    return null;
  }
  const socialLinks = socialNetworkLinks.map((network, index) => {
    return (
      <a
        className={"shrink-0 hover:opacity-70 mr-[1.2rem] lg:mr-[2.5rem]"}
        key={index}
        href={network.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          style={{ width: `${network.iconWidth}px`, height: `${network.iconHeight}px` }}
          src={network.logo}
          alt="image"
        />
      </a>
    );
  });
  return <div className={"flex flex-wrap"}>{socialLinks}</div>;
};

const getImage = (image: JSX.Element | undefined) => {
  if (!image) {
    return null;
  }
  return image;
};

/* const getHomepageNewsTicker = () => {
  return lazy(() => import("../NewsTicker"));
}; */

export default Hero;
