import { DeveloperTools as IDeveloperTools, Link } from "../../data/types";
import LeaveWebsiteConfirmDialog from "../ConfirmDialog";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";

interface Props {
  delay?: boolean;
  data: IDeveloperTools;
}

const DeveloperTools = ({ data }: Props) => {
  const dialogRef = useRef<LeaveWebsiteConfirmDialog>(null);
  const { t } = useTranslation();

  const openURL = async (link: Link) => {
    if (!dialogRef.current) {
      return;
    }
    if (!link.isThirdParty) {
      window.open(link.url, "_blank");
      return;
    }
    const hasAgreed = await dialogRef.current.showDialog();
    if (hasAgreed) {
      window.open(link.url, "_blank");
    }
  };

  const logos = data.logos.map((company, index) => {
    return (
      <div
        onClick={() => {
          openURL(company.link);
        }}
        className={
          "lg:max-w-[268px] relative after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:border after:border-[3px] after:border-primary after:-z-10 lg:hover:bg-primary hover:cursor-pointer transition"
        }
        key={index}
      >
        <img className={""} src={company.logo} alt="image" />
      </div>
    );
  });
  return (
    <div className={"lg:border-2 border-primary"}>
      <div
        data-aos={"fade-up"}
        className={
          "title text-[1.5rem] lg:pl-[2.5rem] lg:py-[0.75rem] leading-[2rem] lg:leading-[2.5rem] lg:text-[1.875rem] text-white lg:border-b-2 border-primary"
        }
      >
        {data.title}
      </div>
      <div
        data-aos={"fade-up"}
        className={
          "grid grid-cols-2 gap-x-[0.9375rem] gap-y-[0.5625rem] lg:grid-cols-4 lg:gap-x-[2.6875rem] lg:gap-y-[2.6875rem] lg:px-[2.5rem] pt-[1.875rem] lg:pt-[2.225rem] lg:pb-[3.714rem]"
        }
      >
        {logos}
      </div>
      {/* Confirm leaving website dialog */}
      <LeaveWebsiteConfirmDialog
        title={t([localeKeys.youAreLavingCrab])}
        message={t([localeKeys.leavingCrabMessage])}
        ok={t([localeKeys.continue])}
        cancel={t([localeKeys.cancel])}
        type={1}
        ref={dialogRef}
      />
    </div>
  );
};

export default DeveloperTools;
