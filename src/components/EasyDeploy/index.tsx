import { EasyDeploy as IEasyDeploy } from "../../data/types";

interface Props {
  data: IEasyDeploy;
}

const EasyDeploy = ({ data }: Props) => {
  const mobileIntro = getMobileIntro(data);
  const pcIntro = getPCIntro(data);
  return (
    <div>
      <div data-aos={"fade-up"} className={"title-lg text-white"}>
        {data.title}
      </div>
      <div className={"flex flex-col lg:flex-row lg:items-center mt-[0.625rem] lg:mt-[3.75rem] lg:gap-[2.5rem]"}>
        <div data-aos={"fade-up"} className={"flex-1 lg:order-2"}>
          <div className={"lg:hidden"}>{mobileIntro}</div>
          <div className={"hidden lg:block"}>{pcIntro}</div>
        </div>
        <div data-aos={"fade-up"} className={"w-full lg:order-1 shrink-0 mt-[2.5rem] lg:mt-0 lg:w-[55.208%]"}>
          <img src={data.image} alt="image" />
        </div>
      </div>
    </div>
  );
};

const getPCIntro = (data: IEasyDeploy) => {
  return (
    <div className={"capitalize"}>
      <div className={"title-2 text-white"}>{data.subTitle}</div>
      <div className={"mt-[1.5625rem]"}>
        {data.list.map((item, index) => {
          const after =
            index === 0
              ? `after:absolute after:left-0 after:-bottom-[10px] after:h-[3px] after:w-[155px] after:bg-gray`
              : ``;
          return (
            <div className={`relative mt-[1.5625rem] ${after}`} key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getMobileIntro = (data: IEasyDeploy) => {
  return (
    <div className={"capitalize"}>
      <div>{data.subTitle}</div>
      <div className={"mt-[1.5625rem]"}>
        {data.list.map((item, index) => {
          return (
            <div className={"mt-[1.5625rem]"} key={index}>
              -{item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EasyDeploy;
