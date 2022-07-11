import Feature from "../Feature";
import { FeatureWrapper as IFeatureWrapper } from "../../data/types";
import { NavLink } from "react-router-dom";
interface Props {
  data: IFeatureWrapper;
}
const FeatureWrapper = ({ data }: Props) => {
  const featuresList = data.data;
  const pcGrid = data.pcGrid;
  const linksList = data.links ?? [];
  const features = featuresList.map((item, index) => {
    const key = `${index}-${item.title}`;
    return <Feature key={key} pcGrid={pcGrid} data={item} />;
  });

  const links = linksList.map((link, index) => {
    const key = `${index}-${link.url}`;
    if (link.isExternal) {
      return (
        <a key={key} href={link.url} target="_blank" className={"btn capitalize"} rel="noreferrer">
          {link.title}
        </a>
      );
    }
    return (
      <NavLink key={key} to={link.url} className={"btn capitalize"}>
        {link.title}
      </NavLink>
    );
  });

  const bottomLinks =
    links.length === 0 ? null : <div className={"flex-wrap flex gap-[1.25rem] inter-block-space-2"}>{links}</div>;

  return (
    <div>
      {data.title}
      <div className={"flex flex-col lg:flex-row lg:flex-wrap"}>{features}</div>
      {bottomLinks}
    </div>
  );
};

export default FeatureWrapper;
