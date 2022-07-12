import { CompatibilityPromo as ICompatibility } from "../../data/types";

interface Props {
  data: ICompatibility;
}

const CompatibilityPromo = ({ data }: Props) => {
  const leftTextList = data.left.map((item, index) => {
    const topMargin = index === 0 ? `` : `mt-[0.65rem] lg:mt-[1.25rem]`;
    return (
      <div key={index} className={topMargin}>
        -{item}
      </div>
    );
  });
  const rightTextList = data.right.map((item, index) => {
    const topMargin = index === 0 ? `` : `mt-[0.65rem] lg:mt-[1.25rem]`;
    return (
      <div key={index} className={topMargin}>
        -{item}
      </div>
    );
  });
  return (
    <div>
      <div data-aos={"fade-up"} className={"flex capitalize flex-col lg:items-center"}>
        <div className={"title-lg text-white lg:w-[68.33%]"}>{data.title}</div>
        <div className={"mt-0.625rem lg:w-[68.33%]"}>{data.text}</div>
      </div>
      <div
        data-aos={"fade-up"}
        className={"capitalize flex items-center lg:gap-[1.875rem] mt-[1.875rem] lg:mt-[6.25rem]"}
      >
        <div className={"hidden lg:block flex-1 shrink-0"}>{leftTextList}</div>
        <div className={"w-full lg:w-[53.167%] shrink-0"}>
          <img className={"w-full"} src={data.image} alt="image" />
        </div>
        <div className={"hidden lg:block flex-1 shrink-0"}>{rightTextList}</div>
      </div>
      <div
        data-aos={"fade-up"}
        className={"capitalize text-[0.75rem] mt-[1.875rem] flex lg:hidden items-center gap-[1.25rem]"}
      >
        <div className={"flex-1 shrink-0"}>{leftTextList}</div>
        <div className={"flex-1 shrink-0"}>{rightTextList}</div>
      </div>
    </div>
  );
};

export default CompatibilityPromo;
