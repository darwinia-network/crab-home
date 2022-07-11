import { CompatibilityPromo as CompatibilityType } from "../../data/types";

interface Props {
  data: CompatibilityType;
}

const CompatibilityPromo = ({ data }: Props) => {
  const leftTextList = data.left.map((item, index) => {
    const topMargin = index === 0 ? `` : `mt-[1.25rem]`;
    return (
      <div key={index} className={topMargin}>
        -{item}
      </div>
    );
  });
  const rightTextList = data.right.map((item, index) => {
    const topMargin = index === 0 ? `` : `mt-[1.25rem]`;
    return (
      <div key={index} className={topMargin}>
        -{item}
      </div>
    );
  });
  return (
    <div>
      <div className={"flex flex-col lg:items-center"}>
        <div className={"title-lg text-white lg:w-[68.33%]"}>{data.title}</div>
        <div className={"mt-0.625rem lg:w-[68.33%]"}>{data.text}</div>
      </div>
      <div className={"flex items-center lg:gap-[1.875rem] mt-[1.875rem] lg:mt-[6.25rem]"}>
        <div className={"hidden lg:block flex-1"}>{leftTextList}</div>
        <div className={"w-full lg:w-[53.167%] shrink-0"}>
          <img className={"w-full"} src={data.image} alt="image" />
        </div>
        <div className={"hidden lg:block flex-1"}>{rightTextList}</div>
      </div>
    </div>
  );
};

export default CompatibilityPromo;
