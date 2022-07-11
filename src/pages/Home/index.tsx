import Hero from "../../components/Hero";
// import FeatureWrapper from "../../components/FeatureWrapper";
import { useHomeData } from "../../data/home";
import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import CrabIntro from "../../components/CrabIntro";
import CompatibilityPromo from "../../components/CompatibilityPromo";
// import LogosSlider from "../../components/LogosSlider";

const Home = () => {
  const { heroData, crabIntroData, compatibilityPromo } = useHomeData();

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
      {/* <div className={"container inter-block-space-1"}>
        <LogosSlider />
        <LogosSlider delay={true} />
      </div> */}
      {/* <div data-aos={"fade-up"} data-aos-duration={700} className={"container inter-block-space-1"}>
        <FeatureWrapper data={darwiniaIntroData} />
      </div> */}
      <Footer data={footerData} />
    </div>
  );
};

export default Home;
