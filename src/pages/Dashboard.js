import React, { useContext } from "react";
import { ReposChart, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import Footer from "../components/Footer";
const Dashboard = () => {
  const { isloading, initial } = useContext(GithubContext);
  if (initial) {
    return (
      <>
        <main>
          <Navbar />
          <Search />
        </main>
      </>
    );
  }
  if (isloading) {
    return (
      <>
        <main>
          <Navbar />
          <Search />
          <img src={loadingImage} alt="loging" className="loading-img" />
        </main>
      </>
    );
  }
  return (
    <>
      <main>
        <Navbar />
        <Search />
        <User />
        <ReposChart />
        <Repos />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
