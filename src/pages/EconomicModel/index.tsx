import Hero from "../../components/Hero";
import { useEconomicModelData } from "../../data/economicModel";

const EconomicModel = () => {
  const { heroData } = useEconomicModelData();
  return (
    <div>
      <Hero page={"ECONOMIC_MODEL"} data={heroData} />
    </div>
  );
};

export default EconomicModel;
