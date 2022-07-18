import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu-toggler.svg";
import closeIcon from "../../assets/images/close.svg";
import { useEffect, useState } from "react";
import { Menu } from "../../data/types";
import localeKeys from "../../locale/localeKeys";
import { useTranslation } from "react-i18next";
import { useMenuData } from "../../data/menu";
import { CSSTransition } from "react-transition-group";

interface SubMenuHeight {
  [path: string]: number;
}

interface NavigationDataSet {
  path?: string;
}

const Navigation = () => {
  const { menu } = useMenuData();
  const { t } = useTranslation();
  const [isMobileNavVisible, toggleMobileNav] = useState(false);
  const [openedMobileMenuPath, setOpenedMobileMenuPath] = useState<string | undefined>(undefined);
  const [mobileMenuHeightByPathMap, setMenuHeight] = useState<SubMenuHeight>({});
  const [openedPCMenuPath, setOpenedPCMenuPath] = useState<string | undefined>(undefined);
  const [navBarBackground, setNavBarBackground] = useState("rgba(0,0,0,0)");
  const appsURL = "https://apps.darwinia.network/?network=crab";
  const navBarThreshold = 100;
  /* this is temporary code, will be deleted very soon */
  const [isTooltipVisible, setTooltipStatus] = useState(false);

  useEffect(() => {
    const mobileNavParents = document.querySelectorAll<HTMLElement>(".mobile-nav-parent");
    mobileNavParents.forEach((item) => {
      const dataset = item.dataset as unknown as NavigationDataSet;
      if (dataset.path) {
        const path = dataset.path;
        const height = item.scrollHeight;
        setMenuHeight((oldValue) => {
          return {
            ...oldValue,
            [path]: height,
          };
        });
      }
    });
  }, [openedPCMenuPath, openedMobileMenuPath]);

  useEffect(() => {
    document.addEventListener("click", onClosePCSubMenu);
    const mobileNavLinks = document.querySelectorAll<HTMLElement>(".mobile-navigation a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", onCloseMobileNavigation);
    });
    window.addEventListener("scroll", updateNavBarBackground);
    return () => {
      document.removeEventListener("click", onClosePCSubMenu);
      window.removeEventListener("scroll", updateNavBarBackground);
      mobileNavLinks.forEach((link) => {
        link.removeEventListener("click", onCloseMobileNavigation);
      });
    };
  }, []);

  /* use this to trigger mobile nav links click on the first app init. It needs this hook
   * since the mobile nav will be unmounted by default, so the links wouldn't be selectable */
  useEffect(() => {
    const mobileNavLinks = document.querySelectorAll<HTMLElement>(".mobile-navigation a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", onCloseMobileNavigation);
    });
  }, [isMobileNavVisible]);

  const updateNavBarBackground = () => {
    const scrollY = window.scrollY;
    if (scrollY > navBarThreshold) {
      setNavBarBackground("rgba(0,0,0,1)");
    } else {
      setNavBarBackground("rgba(0,0,0,0)");
    }
  };

  const controlMobileNav = () => {
    toggleMobileNav((isVisible) => {
      return !isVisible;
    });
  };

  const onPCSubMenuToggle = (path: string | undefined) => {
    setOpenedPCMenuPath(openedPCMenuPath === path ? undefined : path);
  };

  const onClosePCSubMenu = () => {
    setOpenedPCMenuPath(undefined);
  };

  const onCloseMobileNavigation = () => {
    toggleMobileNav(false);
  };

  const onMobileSubMenuToggle = (path: string | undefined) => {
    setOpenedMobileMenuPath(openedMobileMenuPath === path ? undefined : path);
  };

  const toggleTooltip = (isVisible: boolean) => {
    setTooltipStatus(() => {
      return isVisible;
    });
  };

  const MobileMenu = createMobileMenu(menu, openedMobileMenuPath, mobileMenuHeightByPathMap, onMobileSubMenuToggle);

  const PCMenu = createPCMenu(menu, openedPCMenuPath, onPCSubMenuToggle, isTooltipVisible, toggleTooltip);

  const appsButton = (
    <a href={appsURL} target="_blank" className={"btn-primary ml-[0.9375rem] capitalize self-end"} rel="noreferrer">
      {t(localeKeys.apps)}
    </a>
  );

  return (
    /* bg-black */
    <div
      style={{ background: navBarBackground }}
      className={
        "duration-700 transition-all fixed z-[99] left-0 top-0 right-0 flex justify-center h-[3.75rem] lg:h-[4.375rem]"
      }
    >
      <div className={"justify-between flex container pl-[1.25rem] pr-[0.25rem] lg:px-[1.875rem] xl:px-[3.75rem]"}>
        <NavLink to={"/"} className={"flex hover:cursor-pointer"}>
          <img className={"self-center w-[5.25rem] lg:w-[7.125rem]"} src={logo} alt="logo" />
        </NavLink>
        {/* PC navigation */}
        {/* DON'T use the class hidden since the display: none
       items have zero height, this will make us fail to get the submenu scrollHeights
       if the mobile navigation is hidden when the component is getting mounted */}
        <div
          className={
            "max-w-[1px] max-h-[1px] overflow-hidden lg:max-w-[none] lg:max-h-[none] lg:overflow-visible lg: lg:block pc-navigation"
          }
        >
          <div className={"flex items-center h-full"}>
            <div className={"flex items-center h-full"}>{PCMenu}</div>
            <div className={`flex justify-end`}>{appsButton}</div>
          </div>
        </div>
        {/* Mobile navigation toggler */}
        <div
          onClick={() => {
            controlMobileNav();
          }}
          className={"lg:hidden flex items-center px-[1rem] hover:opacity-80"}
        >
          <img src={menuIcon} alt="menu-toggler" />
        </div>
      </div>
      {/* Mobile Navigation */}
      {/* overlay */}
      <CSSTransition in={isMobileNavVisible} classNames={"nav-overlay"} timeout={300} unmountOnExit={true}>
        <div
          onClick={() => {
            controlMobileNav();
          }}
          className={`lg:hidden navigation-overlay`}
        />
      </CSSTransition>
      {/* Mobile Navigation itself */}
      {/* DON'T use the class hidden since the display: none
       items have zero height, this will make us fail to get the submenu scrollHeights
       if the mobile navigation is hidden when the component is getting mounted */}

      <CSSTransition in={isMobileNavVisible} unmountOnExit={true} classNames={"mobile-nav"} timeout={300}>
        <div className={`lg:w-[1px] lg:h-[1px] lg:overflow-hidden mobile-navigation`}>
          <div className={"flex h-full flex-col"}>
            <div className={"flex justify-end px-[1.25rem]"}>
              <img
                onClick={() => {
                  controlMobileNav();
                }}
                className={"py-[1.375rem]"}
                src={closeIcon}
                alt="close-icon"
              />
            </div>
            <div className={"flex-1 relative overflow-auto"}>
              <div className={"absolute top-0 left-0 right-0"}>
                <div className={"px-[1.25rem]"}>
                  <div className={"divider"} />
                </div>
                <div className={"flex text-right flex-col my-[1.25rem]"}>{MobileMenu}</div>
                <div className={"px-[1.25rem]"}>
                  <div className={"divider"} />
                </div>
                <div className={`flex justify-end my-[1.875rem] px-[1.25rem]`}>{appsButton}</div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

const createPCMenu = (
  menu: Menu[],
  openedMenuPath: string | undefined,
  onToggleSubMenu: (path: string) => void,
  isTooltipVisible: boolean,
  onToggleTooltip: (isVisible: boolean) => void
) => {
  return menu
    .filter((item) => item.device !== "MOBILE")
    .map((item, index) => {
      const path = `${index}`;
      const isActive = openedMenuPath === path;
      if (item.children) {
        const subMenu = item.children.map((subItem, subIndex) => {
          const parentKey = `${index}-${subIndex}`;
          if (subItem.children) {
            const childItems = createPCSubMenu(subItem, parentKey, isTooltipVisible, onToggleTooltip);
            return <div key={parentKey}>{childItems}</div>;
          }
          return <div key={parentKey}>{subItem.title}</div>;
        });

        return (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={"relative text text-white capitalize px-[.9375rem]"}
            key={path}
          >
            <div
              onClick={() => {
                onToggleSubMenu(path);
              }}
              className={"hover:cursor-pointer hover:opacity-70 select-none"}
            >
              {item.title}
            </div>
            <CSSTransition unmountOnExit={true} in={isActive} classNames={"pc-sub-menu"} timeout={300}>
              <div
                className={"pc-nav-parent left-1/2 top-[30px] pt-[15px] absolute z-[2] w-[33.75rem] overflow-hidden"}
              >
                <div className={"justify-between flex bg-black border-2 border-primary p-[2.5rem] select-none"}>
                  {subMenu}
                </div>
              </div>
            </CSSTransition>
          </div>
        );
      }
      if (item.isExternalLink) {
        return (
          <a
            href={item.path}
            target="_blank"
            key={index}
            className={`text text-white capitalize px-[0.9375rem] hover:opacity-70 select-none`}
            rel="noreferrer"
          >
            {item.title}
          </a>
        );
      }
      return (
        <NavLink
          to={item.path ?? ""}
          key={index}
          className={`text text-white capitalize px-[.9375rem] hover:opacity-70 select-none`}
        >
          {item.title}
        </NavLink>
      );
    });
};

const createPCSubMenu = (
  menuItems: Menu,
  parentKey: string,
  isTooltipVisible: boolean,
  onToggleTooltip: (isVisible: boolean) => void
) => {
  const childItems =
    menuItems.children?.map((item, index) => {
      const key = `${parentKey}-${index}`;
      if (item.isComingSoon) {
        return (
          <div className={"flex relative text-white capitalize mt-[0.625rem]"} key={key}>
            <div
              onMouseEnter={() => {
                onToggleTooltip(true);
              }}
              onMouseLeave={() => {
                onToggleTooltip(false);
              }}
            >
              {item.title}
            </div>
            <CSSTransition in={isTooltipVisible} unmountOnExit={true} timeout={0} classNames={""}>
              <div
                className={`absolute left-1/2 top-[20px] -translate-x-1/2 bg-primary z-10 text-white px-[10px] py-[3px] w-[65%] text-center`}
              >
                Updating...
              </div>
            </CSSTransition>
          </div>
        );
      }
      if (item.path === "") {
        return (
          <div className={"flex text-white capitalize mt-[0.625rem] opacity-50"} key={key}>
            {item.title}
          </div>
        );
      }
      return (
        <a
          className={"flex text-white capitalize mt-[0.625rem] hover:opacity-70"}
          href={item.path}
          target="_blank"
          key={key}
          rel="noreferrer"
        >
          {item.title}
        </a>
      );
    }) ?? null;
  const color = menuItems.title.toLowerCase().includes("darwinia") ? "#FF0083" : "#512DBC";
  return (
    <div key={parentKey}>
      <div
        className={`flex after:content-[''] after:absolute after:left-0
            after:right-0 after:bottom-0 after:h-[2px] after:bg-gray after:opacity-50
            items-center font-bold text-white title relative pb-[0.625rem]`}
      >
        <div>{menuItems.title}</div>
        <div style={{ backgroundColor: color }} className={"w-[0.875rem] h-[0.875rem] ml-[10px] bg-primary"} />
      </div>
      <div>{childItems}</div>
    </div>
  );
};

/* our mobile navigation only supports two levels */
const createMobileMenu = (
  menu: Menu[],
  openedMenuPath: string | undefined,
  menuHeightByPathMap: SubMenuHeight,
  onChildMenuToggle: (path: string | undefined) => void
) => {
  return menu
    .filter((item) => item.device !== "PC")
    .map((item, index) => {
      const path = `${index}`;
      if (item.isExternalLink) {
        return createExternalMobileLink(item, `${index}`);
      }
      if (item.children) {
        const isActive = openedMenuPath === path;
        const childrenNavItems = item.children.map((childItem, childIndex) => {
          const key = `${index}-${childIndex}`;
          if (childItem.isExternalLink) {
            return createExternalMobileLink(childItem, key, true);
          }
          return createMobileLink(childItem, key);
        });
        return (
          <div key={path} className={"first:mt-0 mt-[0.3125rem]"}>
            <div
              onClick={() => {
                onChildMenuToggle(path);
              }}
              className={`text text-white capitalize px-[1.25rem] py-[0.625rem]`}
            >
              {item.title}
            </div>
            <div
              style={{
                height: isActive ? `${menuHeightByPathMap[path]}px` : "0",
                transitionProperty: "height",
              }}
              data-path={path}
              className={`mobile-nav-parent ease-in-out duration-[300ms] flex
              overflow-hidden flex-col relative after:content-[''] after:z-[-1]
              after:absolute after:left-0 after:right-0 after:top-0
              after:bottom-0 after:bg-white after:opacity-10`}
            >
              {childrenNavItems}
            </div>
          </div>
        );
      }
      return createMobileLink(item, `${index}`);
    });
};

const createExternalMobileLink = (item: Menu, indexString = "0", isChild = false) => {
  if (isChild) {
    if (item.path === "") {
      return (
        <div key={indexString} className={`text text-white capitalize px-[1.25rem] py-[0.3125rem] opacity-50`}>
          {item.title}
        </div>
      );
    }
    return (
      <a
        href={item.path}
        target="_blank"
        key={indexString}
        className={`text text-white capitalize px-[1.25rem] py-[0.3125rem]`}
        rel="noreferrer"
      >
        {item.title}
      </a>
    );
  }

  if (item.path === "") {
    return (
      <div
        key={indexString}
        className={`text text-white capitalize first:mt-0 mt-[0.3125rem] px-[1.25rem] py-[0.625rem] opacity-50`}
      >
        {item.title}
      </div>
    );
  }

  return (
    <a
      href={item.path}
      target="_blank"
      key={indexString}
      className={`text text-white capitalize first:mt-0 mt-[0.3125rem] px-[1.25rem] py-[0.625rem]`}
      rel="noreferrer"
    >
      {item.title}
    </a>
  );
};

const createMobileLink = (item: Menu, indexString = "0") => {
  return (
    <NavLink
      to={item.path ?? ""}
      key={indexString}
      className={`relative text text-white capitalize first:mt-0 mt-[0.3125rem] px-[1.25rem] py-[0.625rem]`}
    >
      {item.title}
    </NavLink>
  );
};

export default Navigation;
