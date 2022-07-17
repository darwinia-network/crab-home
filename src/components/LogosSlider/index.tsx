import CustomMarquee, { PixelsPerSecond, ScreenSizeDelay } from "../CustomMarquee";
import { CompanyLogo, Link } from "../../data/types";
import { forwardRef, useImperativeHandle, useRef } from "react";
import LeaveWebsiteConfirmDialog from "../LeaveWebsiteConfirmDialog";
import localeKeys from "../../locale/localeKeys";
import { useTranslation } from "react-i18next";

interface Props {
  delay?: boolean;
  data: CompanyLogo[];
}

export interface LogosSliderRefs {
  pauseSlider: () => void;
  playSlider: () => void;
}

const LogosSlider = forwardRef<LogosSliderRefs, Props>(({ data, delay }: Props, ref) => {
  const { t } = useTranslation();
  const dialogRef = useRef<LeaveWebsiteConfirmDialog>(null);
  const marqueeRef = useRef<CustomMarquee>(null);

  const speed: PixelsPerSecond = { "320": 18, "768": 24, "1024": 30 };
  /* to delay a half of the slider item width: sliderItemWidth/2 then divide
  by the speed for a particular screen size eg: 103.32 / 2 = 51.66px then
   51.66px divide by speed per second of 320px screen 51.66/18 = 2.87 seconds */
  const screenSizeDelay: ScreenSizeDelay = delay ? { "320": 2.87, "768": 2.1525, "1024": 4.4667 } : {};

  useImperativeHandle(ref, () => {
    return {
      pauseSlider: () => {
        pauseSlider();
      },
      playSlider: () => {
        playSlider();
      },
    };
  });

  const pauseSlider = () => {
    if (!marqueeRef.current) {
      return;
    }
    marqueeRef.current.pauseSlider();
  };

  const playSlider = () => {
    if (!marqueeRef.current) {
      return;
    }
    marqueeRef.current.playSlider();
  };

  const openURL = async (link: Link) => {
    if (!dialogRef.current) {
      return;
    }
    if (!link.isThirdParty) {
      window.open(link.url, "_blank");
    }
    const hasAgreed = await dialogRef.current.showDialog();
    if (hasAgreed) {
      window.open(link.url, "_blank");
    }
  };

  return (
    <div>
      <CustomMarquee
        initialTranslateRatio={0}
        shouldDuplicate={true}
        style={{ width: "100%" }}
        speed={speed}
        delay={screenSizeDelay}
        ref={marqueeRef}
      >
        <div className={"flex"}>
          {data.map((item, index) => {
            return createASlider(item, index, openURL);
          })}
        </div>
      </CustomMarquee>

      {/* Confirm leaving website dialog */}
      <LeaveWebsiteConfirmDialog
        title={t([localeKeys.youAreLavingCrab])}
        message={t([localeKeys.leavingCrabMessage])}
        ok={t([localeKeys.continue])}
        cancel={t([localeKeys.cancel])}
        ref={dialogRef}
      />
    </div>
  );
});

LogosSlider.displayName = "LogosSlider";

const createASlider = (company: CompanyLogo, index: number, clickHandler: (link: Link) => void): JSX.Element => {
  const random = Math.random();
  return (
    <div
      className={"cursor-pointer w-[6.4575rem] lg:w-[16.75rem] border-2 border-primary"}
      key={`${index}-${random}`}
      onClick={() => {
        clickHandler(company.link);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img className={"w-full"} src={company.logo} alt="image" />
      </div>
    </div>
  );
};

export default LogosSlider;
