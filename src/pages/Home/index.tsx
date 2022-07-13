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
import LogosSlider from "../../components/LogosSlider";
import DeveloperTools from "../../components/DeveloperTools";

const Home = () => {
  const {
    heroData,
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

  return (
    <div>
      <Hero page={"HOME"} data={heroData} />
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
      <div className={"bg-primary bg-opacity-20 py-[1.0625rem] inter-block-space-1"}>
        <LogosSlider data={companySlider.top} />
        <LogosSlider data={companySlider.bottom} delay={true} />
      </div>
      <div className={"container-3 inter-block-space-1"}>
        <DeveloperTools data={developerTools} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Home;
