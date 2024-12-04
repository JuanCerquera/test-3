import Header from "/src/website/components/Header.jsx";
import Footer from "/src/website/components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "/src/website/hooks/useScrollToTop.jsx";

export default function Template({ children }) {
  useScrollToTop();
  return (
    <div className="scroll-smooth">
      <Header />
      {/* <Outlet /> */}
      {children}
      <Footer />
    </div>
  );
}
