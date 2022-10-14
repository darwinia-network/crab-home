import { useFooterData } from "../../data/footer";
import Footer from "../../components/Footer";
import notFound from "../../assets/images/not-found.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";

const PageNotFound = () => {
  const { footerData } = useFooterData();
  const { t } = useTranslation();
  return (
    <div className={`bg-center bg-cover bg-no-repeat`}>
      <div data-aos={"fade-up"} className={`container space-top`}>
        <div className={"flex flex-col lg:flex-row justify-center items-center pt-[8.75rem] lg:pt-[18.75rem]"}>
          <img
            className={"order-2 lg:order-1 w-[58.9%] max-w-[400px] lg:max-w-none lg:w-[18.25%]"}
            src={notFound}
            alt="image"
          />
          <div
            className={
              "order-1 lg:order-2 mb-[2.25rem] lg:mb-0 text-center lg:text-left pl-[8%] lg:pl-0 capitalize lg:ml-[3.75rem]"
            }
          >
            <div className={"title mb-[1.25rem] text-white lg:text lg:text-white"}>{t(localeKeys.pageNotFound)}</div>
            <NavLink className={"btn"} to={"/"}>
              <>
                {t(localeKeys.goBackHome)}
                <span className={"ml-[10px]"}>{">"}</span>
              </>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default PageNotFound;
