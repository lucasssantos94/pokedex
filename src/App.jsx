import ScrollToTop from "react-scroll-to-top";
import { Outlet } from "react-router-dom";

import ContainerApp from "@components/ContainerApp";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ContainerApp>
          <Navigation />
          <Outlet />
          <ScrollToTop smooth />
        </ContainerApp>
      </main>
      <Footer />
    </>
  );
};

export default App;
