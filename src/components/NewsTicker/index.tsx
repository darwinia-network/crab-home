import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";
import CustomMarquee from "../CustomMarquee";

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
        {/* the value 1.2 will offset the marquee to the more right every time it starts sliding to the left */}
        <CustomMarquee shouldDuplicate={false} initialTranslateRatio={1.2}>
          <div className={"capitalize select-none"} dangerouslySetInnerHTML={{ __html: t(localeKeys.newsPost) }} />
        </CustomMarquee>
      </div>
    </div>
  );
};

export default NewsTicker;
