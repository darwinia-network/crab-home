import Hero from "../../components/Hero";
// import FeatureWrapper from "../../components/FeatureWrapper";
import { useHomeData } from "../../data/home";
import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import CrabIntro from "../../components/CrabIntro";
import CompatibilityPromo from "../../components/CompatibilityPromo";
import BridgeMessaging from "../../components/BridgeMessaging";
import EasyDeploy from "../../components/EasyDeploy";
import FeatureWrapper from "../../components/FeatureWrapper";
import CrabTokens from "../../components/CrabTokens";
import DeveloperTools from "../../components/DeveloperTools";
import { useEffect, useRef } from "react";
import LogosSlider, { LogosSliderRefs } from "../../components/LogosSlider";
import NewsDialog from "../../components/ConfirmDialog";
import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";

const Home = () => {
  const {
    heroData,
    newsPost,
    crabIntroData,
    compatibilityPromo,
    bridgeMessaging,
    easyDeploy,
    crabPromoFeature,
    crabToken,
    companySlider,
    developerTools,
  } = useHomeData();

  const { footerData } = useFooterData();
  const topSlider = useRef<LogosSliderRefs>(null);
  const bottomSlider = useRef<LogosSliderRefs>(null);
  const newsDialogRef = useRef<NewsDialog>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (newsDialogRef.current) {
        newsDialogRef.current.showDialog();
      }
    }
  }, []);

  const pauseSlider = () => {
    if (!topSlider.current || !bottomSlider.current) {
      return;
    }
    topSlider.current.pauseSlider();
    bottomSlider.current.pauseSlider();
  };

  const playSlider = () => {
    if (!topSlider.current || !bottomSlider.current) {
      return;
    }
    topSlider.current.playSlider();
    bottomSlider.current.playSlider();
  };

  return (
    <div>
      <Hero page={"HOME"} newsPost={newsPost} data={heroData} />
      <div className={"container inter-block-space-1"}>
        <CrabIntro data={crabIntroData} />
      </div>
      <div className={"container inter-block-space-1"}>
        <CompatibilityPromo data={compatibilityPromo} />
      </div>
      <div className={"container inter-block-space-1"}>
        <BridgeMessaging data={bridgeMessaging} />
      </div>
      <div className={"container inter-block-space-1"}>
        <EasyDeploy data={easyDeploy} />
      </div>
      <div className={"container inter-block-space-1"}>
        <FeatureWrapper data={crabPromoFeature} />
      </div>
      <div className={"container-2 inter-block-space-1"}>
        <CrabTokens data={crabToken} />
      </div>
      {/* this will expand full width with no limit */}
      <div
        onMouseEnter={() => {
          pauseSlider();
        }}
        onMouseLeave={() => {
          playSlider();
        }}
        onClick={() => {
          playSlider();
        }}
        className={"bg-primary bg-opacity-20 py-[1.0625rem] inter-block-space-1"}
      >
        <LogosSlider ref={topSlider} data={companySlider.levelOne} />
        <LogosSlider ref={bottomSlider} data={companySlider.levelTwo} delay={true} />
      </div>
      <div className={"container-3 inter-block-space-1"}>
        <DeveloperTools data={developerTools} />
      </div>
      {/* This news dialog will only be visible on mobile phones */}
      <NewsDialog
        type={2}
        ref={newsDialogRef}
        cancel={t(localeKeys.cancel)}
        innerLink={newsPost.link}
        message={newsPost.text}
      />
      <Footer data={footerData} />
    </div>
  );
};

export default Home;
