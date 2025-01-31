import ScrollToTop from "react-scroll-to-top";
import { Outlet } from "react-router-dom";

import "./app.scss";

import ContainerApp from "@components/ContainerApp";
import Header from "@components/Header";
import Navigation from "@components/Navigation";

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
    </>
  );
};

export default App;
