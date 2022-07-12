import { BridgeMessaging as IBridgeMessaging } from "../../data/types";

interface Props {
  data: IBridgeMessaging;
}

const BridgeMessaging = ({ data }: Props) => {
  return (
    <div className={"flex flex-col lg:flex-row lg:items-center lg:gap-[8.375rem]"}>
      <div className={"flex-1 lg:order-2"}>
        <div data-aos={"fade-up"} className={"title-lg text-white capitalize mb-[0.625rem]"}>
          {data.title}
        </div>
        <div data-aos={"fade-up"} className={"capitalize"}>
          <div>{data.text}</div>
        </div>
      </div>
      <div className={"pt-[2.5rem] lg:order-1 shrink-0 lg:pt-0 w-full lg:w-[61.167%]"}>
        <div data-aos={"fade-up"}>
          <img className={"w-full"} src={data.image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default BridgeMessaging;
