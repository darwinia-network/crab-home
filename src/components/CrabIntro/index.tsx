import { CrabIntro as CrabIntroType } from "../../data/types";

interface Props {
  data: CrabIntroType;
}

const CrabIntro = ({ data }: Props) => {
  const crabNetworksList = data.content.list.map((item, index) => {
    return (
      <div key={index} className={"capitalize mt-[2rem]"}>
        {item}
      </div>
    );
  });
  return (
    <div>
      <div className={"title-lg text-white capitalize mb-[0.625rem]"}>{data.title}</div>
      <div className={"flex flex-col lg:flex-row lg:gap-[4rem]"}>
        <div data-aos={"fade-up"} data-aos-duration={700} className={"capitalize"}>
          <div>{data.content.text}</div>
          <div>{crabNetworksList}</div>
        </div>
        <div
          data-aos={"fade-up"}
          data-aos-duration={700}
          className={"shrink-0 pt-[5.3125rem] w-[67.167%] hidden lg:block"}
        >
          <img className={"w-full"} src={data.image} alt="image" />
        </div>
        <div data-aos={"fade-up"} data-aos-duration={700} className={"shrink-0 pt-[1.875rem] lg:hidden"}>
          <img className={"w-full"} src={data.imageMobile} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default CrabIntro;
