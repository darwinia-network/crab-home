import { GrantsProgramResource as IGrantsProgramResource } from "../../data/types";
import Feature from "../Feature";

interface Props {
  data: IGrantsProgramResource;
}

const GrantsProgramResource = ({ data }: Props) => {
  const features = data.resources.map((item, index) => {
    return (
      <div data-aos={"fade-up"} className={"flex-1 shrink-0"} key={index}>
        <Feature data={item} />
      </div>
    );
  });
  return (
    <div>
      <div data-aos={"fade-up"} className={"title-lg text-white capitalize mb-[2.5rem] lg:mb-[1.875rem]"}>
        {data.title}
      </div>
      <div className={"flex flex-col lg:flex-row gap-[2.5rem] lg:gap-[5rem]"}>{features}</div>
    </div>
  );
};

export default GrantsProgramResource;
