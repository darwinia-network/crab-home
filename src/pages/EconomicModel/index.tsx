import Hero from "../../components/Hero";
import { useEconomicModelData } from "../../data/economicModel";
import StakingModel from "../../components/StakingModel";
import Supply from "../../components/Supply";
import CrabInflation from "../../components/CrabInflation";
import RevenueModel from "../../components/RevenueModel";
import { useFooterData } from "../../data/footer";
import Footer from "../../components/Footer";

const EconomicModel = () => {
  const { footerData } = useFooterData();
  const { heroData, stakingModel, supplyStatistics, tokenInflation, revenueModel } = useEconomicModelData();
  return (
    <div>
      <Hero page={"ECONOMIC_MODEL"} data={heroData} />
      <div className={"container inter-block-space-1"}>
        <StakingModel data={stakingModel} />
      </div>
      <div className={"container inter-block-space-1"}>
        <Supply data={supplyStatistics} />
      </div>
      <div className={"container inter-block-space-1"}>
        <CrabInflation data={tokenInflation} />
      </div>
      <div className={"container inter-block-space-1"}>
        <RevenueModel data={revenueModel} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default EconomicModel;
