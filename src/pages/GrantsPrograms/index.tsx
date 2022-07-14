import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";

const GrantsPrograms = () => {
  const { footerData } = useFooterData();
  return (
    <div>
      <div>Grants Programs Page</div>
      <Footer data={footerData} />
    </div>
  );
};

export default GrantsPrograms;
