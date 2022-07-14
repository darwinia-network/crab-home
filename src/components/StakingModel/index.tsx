import { StakingDiagram, StakingModel as IStakingModel } from "../../data/types";
import Feature from "../Feature";

interface Props {
  data: IStakingModel;
}

const StakingModel = ({ data }: Props) => {
  const basicModel = getStakingDiagram(data.basicModel);
  const advancedModel = getStakingDiagram(data.advancedModel);
  return (
    <div className={"flex flex-col lg:flex-row lg:gap-[15.625rem]"}>
      <div data-aos={"fade-up"} className={"flex-1"}>
        <Feature data={data.feature} />
      </div>
      <div className={"w-full lg:w-[51.667%] shrink-0"}>
        <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-0"}>
          {basicModel}
        </div>
        <div data-aos={"fade-up"} className={"divider mt-[2.5rem] lg:mt-[3.125rem]"} />
        <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-[3.125rem]"}>
          {advancedModel}
        </div>
      </div>
    </div>
  );
};

const getStakingDiagram = (stakingDiagram: StakingDiagram): JSX.Element => {
  return (
    <div>
      <img className={"w-full"} src={stakingDiagram.image} alt="image" />
      <div className={"title-2 text-white mt-[2.5rem] lg:mt-[3.125rem]"}>{stakingDiagram.title}</div>
      <div className={"mt-[0.625rem] lg:mt-[1.25rem]"}>{stakingDiagram.text}</div>
    </div>
  );
};

export default StakingModel;
