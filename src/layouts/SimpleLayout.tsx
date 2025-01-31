import Navbar from "../modules/principal/components/Navbar";
import Footer from "../modules/principal/components/Footer";

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  export default SimpleLayout;