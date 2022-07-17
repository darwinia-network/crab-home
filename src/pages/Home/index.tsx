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
import { useRef, useState } from "react";
import CustomMarquee from "../../components/CustomMarquee";
import { CompanyLogo, Link } from "../../data/types";

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
  const topSlider = useRef<LogosSlider>(null);
  const bottomSlider = useRef<LogosSlider>(null);

  const [, updateGreetings] = useState("Hello there");
  const [index, setIndex] = useState(0);

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

  const changeGreetings = () => {
    const newIndex = index + 1;
    setIndex(() => {
      return newIndex;
    });
    updateGreetings(`Hello there ${newIndex}`);
  };

  return (
    <div>
      <div className={"container inter-block-space-1"}>
        <button
          className={"btn"}
          onClick={() => {
            changeGreetings();
          }}
        >
          Update
        </button>
        <CustomMarquee
          initialTranslateRatio={0}
          shouldDuplicate={true}
          style={{ width: "100%" }}
          className={"hello-world"}
        >
          <div
            className={"flex"}
            onClick={() => {
              console.log("you clicked up====");
            }}
          >
            {companySlider.top.map((item, index) => {
              return createASlider(item, index, (link) => {
                console.log(link);
              });
            })}
          </div>
        </CustomMarquee>
        <CustomMarquee
          initialTranslateRatio={0}
          shouldDuplicate={true}
          style={{ width: "100%" }}
          className={"hello-world"}
        >
          <div
            className={"flex"}
            onClick={() => {
              console.log("you clicked up====");
            }}
          >
            {companySlider.bottom.map((item, index) => {
              return createASlider(item, index, (link) => {
                console.log(link);
              });
            })}
          </div>
        </CustomMarquee>
      </div>
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
      <div
        onMouseEnter={() => {
          pauseSlider();
        }}
        onMouseLeave={() => {
          playSlider();
        }}
        className={"bg-primary bg-opacity-20 py-[1.0625rem] inter-block-space-1"}
      >
        <LogosSlider ref={topSlider} data={companySlider.top} />
        <LogosSlider ref={bottomSlider} data={companySlider.bottom} delay={true} />
      </div>
      <div className={"container-3 inter-block-space-1"}>
        <DeveloperTools data={developerTools} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

const createASlider = (company: CompanyLogo, index: number, clickHandler: (link: Link) => void): JSX.Element => {
  const random = Math.random();
  return (
    <div
      className={"cursor-pointer w-[27.56%] lg:w-[18.61%] max-w-[268px]"}
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

export default Home;
