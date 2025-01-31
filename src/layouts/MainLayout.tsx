import Navbar from "../modules/principal/components/Navbar";
import Footer from "../modules/principal/components/Footer";
import Hero from "../modules/principal/components/Hero";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Navbar />
        <Hero/>
        <main>{children}</main>
        <Footer />
      </>
    );
  };

  export default MainLayout;