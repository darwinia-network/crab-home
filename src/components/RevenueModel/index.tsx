import { RevenueModel as IRevenueModel } from "../../data/types";
import Feature from "../Feature";

interface Props {
  data: IRevenueModel;
}

const RevenueModel = ({ data }: Props) => {
  return (
    <div>
      <div data-aos={"fade-up"} className={"flex-1"}>
        <Feature data={data.feature} />
      </div>
      <div className={"w-full flex flex-col lg:mt-[2.5rem] lg:gap-[3.75rem] lg:flex-row shrink-0"}>
        <div data-aos={"fade-up"} className={"flex-1 shrink-0 mt-[2.5rem] lg:mt-0"}>
          <Feature data={data.networkExpense} />
        </div>
        <div data-aos={"fade-up"} className={"flex-1 shrink-0 mt-[2.5rem] lg:mt-0"}>
          <Feature data={data.networkRevenue} />
        </div>
      </div>
    </div>
  );
};

export default RevenueModel;
