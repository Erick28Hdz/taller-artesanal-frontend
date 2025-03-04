import NavbarComponent from "../modules/principal/components/Navbar";
import Footer from "../modules/principal/components/Footer";

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <NavbarComponent />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  export default SimpleLayout;