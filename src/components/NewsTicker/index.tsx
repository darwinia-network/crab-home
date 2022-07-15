import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";

const NewsTicker = () => {
  const { t } = useTranslation();
  return (
    <div className={"border-2 text-white border-primary w-[73.79%] flex items-center h-[1.9375rem] relative bg-black"}>
      <div className={"capitalize absolute top-0 bottom-0 left-0 flex items-center bg-primary px-[0.9375rem]"}>
        {t(localeKeys.news)}
      </div>
      <div
        className={
          "whitespace-nowrap capitalize absolute top-0 bottom-0 flex items-center left-[5rem] right-[2.5rem] overflow-hidden"
        }
      >
        <div className={"new-ticker"}>New Ticker An this will be very long let us see now</div>
      </div>
    </div>
  );
};

export default NewsTicker;
