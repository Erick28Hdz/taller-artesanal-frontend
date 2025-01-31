import Footer from "../modules/principal/components/Footer";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  export default LoginLayout;