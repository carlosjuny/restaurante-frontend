import Header from "../../../components/public/organisms/layouts/Header";
import Footer from "../../../components/public/organisms/layouts/Footer";
import PropTypes from "prop-types";

const TemplateWeb = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

TemplateWeb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWeb;
