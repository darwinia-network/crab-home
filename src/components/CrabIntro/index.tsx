import { CrabIntro as ICrabIntro } from "../../data/types";

interface Props {
  data: ICrabIntro;
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
      <div data-aos={"fade-up"} className={"title-lg text-white capitalize mb-[0.625rem]"}>
        {data.title}
      </div>
      <div className={"flex flex-col lg:flex-row lg:gap-[4rem]"}>
        <div data-aos={"fade-up"} className={"capitalize"}>
          <div>{data.content.text}</div>
          <div>{crabNetworksList}</div>
        </div>
        <div data-aos={"fade-up"} className={"shrink-0 pt-[5.3125rem] w-[67.167%] hidden lg:block"}>
          <img className={"w-full"} src={data.image} alt="image" />
        </div>
        <div data-aos={"fade-up"} className={"shrink-0 pt-[1.875rem] lg:hidden"}>
          <img className={"w-full"} src={data.imageMobile} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default CrabIntro;
