import { PurposeAndMission as IPurposeAndMission } from "../../data/types";
import Feature from "../Feature";

interface Props {
  data: IPurposeAndMission;
}

const PurposeAndMission = ({ data }: Props) => {
  return (
    <div>
      <div data-aos={"fade-up"} className={"title-lg text-white"}>
        {data.title}
      </div>
      <div className={"flex flex-col lg:gap-[10.9375rem] lg:flex-row lg:items-end mt-[2.5rem] lg:mt-[3.125rem]"}>
        <div data-aos={"fade-up"} className={"lg:w-[41.667%] shrink-0"}>
          <Feature data={data.grantsAmount} />
        </div>
        <div className={"flex-1"}>
          <div data-aos={"fade-up"} className={"mt-[2.5rem] lg:mt-0"}>
            <Feature data={data.purpose} />
          </div>
          <div data-aos={"fade-up"} className={"mt-[2.5rem] lg:mt-[5.375rem]"}>
            <Feature data={data.mission} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeAndMission;
