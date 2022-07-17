import CustomMarquee from "../CustomMarquee";
import { CompanyLogo, Link } from "../../data/types";

interface Props {
  delay?: boolean;
  data: CompanyLogo[];
}

const LogosSlider2 = ({ data, delay }: Props) => {
  return (
    <div>
      <CustomMarquee
        initialTranslateRatio={0}
        shouldDuplicate={true}
        style={{ width: "100%" }}
        className={"hello-world"}
      >
        <div
          className={"flex"}
          onClick={() => {
            console.log("you clicked up====");
          }}
        >
          {data.map((item, index) => {
            return createASlider(item, index, (link) => {
              console.log(link);
            });
          })}
        </div>
      </CustomMarquee>
    </div>
  );
};

const createASlider = (company: CompanyLogo, index: number, clickHandler: (link: Link) => void): JSX.Element => {
  const random = Math.random();
  return (
    <div
      className={"cursor-pointer w-[27.56%] lg:w-[18.61%] lg:max-w-[268px] border-2 border-primary"}
      key={`${index}-${random}`}
      onClick={() => {
        clickHandler(company.link);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img className={"w-full"} src={company.logo} alt="image" />
      </div>
    </div>
  );
};

export default LogosSlider2;
