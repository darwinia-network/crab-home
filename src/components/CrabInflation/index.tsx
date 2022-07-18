import { TokenInflation } from "../../data/types";
import Feature from "../Feature";

interface Props {
  data: TokenInflation;
}

const CrabInflation = ({ data }: Props) => {
  return (
    <div className={"flex flex-col lg:flex-row lg:gap-[15.625rem]"}>
      <div data-aos={"fade-up"} className={"flex-1"}>
        <Feature data={data.feature} />
      </div>
      <div className={"w-full lg:w-[51.667%] shrink-0"}>
        <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-0"}>
          <img className={"w-full"} src={data.totalSupplyImage} alt="image" />
        </div>
        <div data-aos={"fade-up"} className={"w-full mt-[2.5rem] lg:mt-[3.125rem]"}>
          <img className={"w-full"} src={data.annualInflationImage} alt="image" />
        </div>
        <div data-aos={"fade-up"} className={"capitalize"}>
          {data.text}
        </div>
      </div>
    </div>
  );
};

export default CrabInflation;
