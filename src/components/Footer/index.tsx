import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";
import { Footer as IFooter, FooterSection, SocialNetwork } from "../../data/types";
import { NavLink } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  data: IFooter;
}

const Footer = ({ data }: Props) => {
  const { t } = useTranslation();
  const emailArray = useState<string>("");
  const setEmail = emailArray[1];
  const footerSections = createFooterSections(data.referenceLinks);
  const copyRight = data.copyright;
  const socialNetworkLinks = getSocialNetworkLinks(data.socialNetworks);

  /* NOTE: Load this javascript here to avoid issues with mailchimp's JS file */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => {
      return e.target.value;
    });
  };

  return (
    <div className={"inter-block-space-1"}>
      <div className={"hidden lg:block lg:px-0"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container py-[1.25rem] lg:py-[3.125rem]"}>
        {/* Only visible on PC */}
        <div className={"hidden lg:block"}>
          <div className={"title text-white capitalize"}>{t(localeKeys.subscribeToUpdates)}</div>
          <div className={"text-white my-[1.25rem] capitalize"}>{t(localeKeys.trackLatestUpdates)}</div>

          {/* Custom Input Field */}
          <div className={"relative"}>
            <div className={"relative inline-block w-full max-w-[21rem]"}>
              <form
                action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
                target="_blank"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
              >
                <input
                  onChange={(e) => {
                    onInputChanged(e);
                  }}
                  name={"EMAIL"}
                  id="mce-EMAIL"
                  className={
                    "w-full placeholder:text-white placeholder:opacity-50 text-white border border-1 border-solid border-primary bg-black outline-0 p-[0.625rem] pr-[7.375rem]"
                  }
                  type="email"
                  placeholder={t(localeKeys.yourEmailHere)}
                />
                <button
                  type="submit"
                  className={
                    "btn border-primary capitalize absolute right-0 top-0 bottom-0 flex items-center disabled:text-gray disabled:cursor-default"
                  }
                >
                  {t(localeKeys.subscribe)}
                </button>
              </form>
            </div>
            <div id="mce-responses" className="clear absolute capitalize text-white left-0 -bottom-[1.875rem]">
              <div className="response" id="mce-error-response" style={{ display: "none" }} />
              <div className="response" id="mce-success-response" style={{ display: "none" }} />
            </div>
          </div>

          <div className={"flex shrink-0 justify-between mt-[3.125rem]"}>{footerSections}</div>
        </div>
      </div>
      <div className={"hidden lg:block lg:px-0"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container lg:hidden"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container py-[1.25rem] lg:py-[3.125rem]"}>
        <div className={"flex flex-col justify-between lg:flex-row"}>
          <div className={"order-3 lg:order-1"}>{copyRight}</div>
          <div className={"divider-50 my-[1.25rem] order-2 lg:hidden"} />
          <div className={"flex items-center order-1 lg:order-2"}>{socialNetworkLinks}</div>
        </div>
      </div>
    </div>
  );
};

const getSocialNetworkLinks = (socialNetworks: SocialNetwork[]) => {
  return socialNetworks.map((network, index) => {
    return (
      <a className={"shrink-0 hover:opacity-70"} key={index} href={network.url} target="_blank" rel="noreferrer">
        <img className={"w-[1.5rem] h-[1.5rem] mr-[1.5rem]"} src={network.logo} alt="image" />
      </a>
    );
  });
};

const createFooterSections = (data: FooterSection[]) => {
  return data.map((section, index) => {
    const sectionTitle = <div className={"title text-white capitalize"}>{section.title}</div>;
    const links = section.links.map((link, subIndex) => {
      const key = `${index}-${subIndex}`;
      if (link.isFake) {
        return (
          <div className={"capitalize text-white py-[0.3125rem] my-[0.3125rem]"} key={key}>
            {link.title}
          </div>
        );
      }
      if (link.url === "") {
        return (
          <div className={"capitalize text-white py-[0.3125rem] my-[0.3125rem] opacity-50"} key={key}>
            {link.title}
          </div>
        );
      }
      if (link.isExternal) {
        return (
          <a
            className={"capitalize text-white py-[0.3125rem] my-[0.3125rem] hover:opacity-70"}
            key={key}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.title}
          </a>
        );
      }

      return (
        <NavLink
          className={"capitalize text-white py-[0.3125rem] my-[0.3125rem] hover:opacity-70"}
          key={key}
          to={link.url}
        >
          {link.title}
        </NavLink>
      );
    });
    return (
      <div className={"flex flex-col"} key={index}>
        <div
          className={
            "relative pb-[1.25rem] mb-[1.25rem] after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary after:h-[5px] after:w-[2.75rem]"
          }
        >
          {sectionTitle}
        </div>
        <div className={"flex flex-col"}>{links}</div>
      </div>
    );
  });
};

export default Footer;
