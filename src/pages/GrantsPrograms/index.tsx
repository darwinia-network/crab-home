import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { useGrantsProgramData } from "../../data/grantsProgram";
import Hero from "../../components/Hero";
import PurposeAndMission from "../../components/PurposeAndMission";
import Feature from "../../components/Feature";

const GrantsPrograms = () => {
  const { footerData } = useFooterData();
  const { heroData, purposeAndMission, toolingAndInfrastructure, ecosystemProjects } = useGrantsProgramData();
  return (
    <div>
      <Hero page={"GRANTS_PROGRAM"} data={heroData} />
      <div className={"container inter-block-space-1"}>
        <PurposeAndMission data={purposeAndMission} />
      </div>
      <div className={"container inter-block-space-1"}>
        <div className={"lg:px-[7.083%]"} data-aos={"fade-up"}>
          <Feature data={toolingAndInfrastructure} />
        </div>
        <div className={"lg:px-[3.4167%] mt-[8.75rem] lg:mt-[3.125rem]"} data-aos={"fade-up"}>
          <Feature data={ecosystemProjects} />
        </div>
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default GrantsPrograms;
