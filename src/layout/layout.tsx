import { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="bg-white ">
        <Navbar />
        <div className="mx-auto max-w-6xl px-4 py-4">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
