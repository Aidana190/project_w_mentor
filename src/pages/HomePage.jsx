import React from "react";
import HeaderHomePage from "../components/homePage/HeaderHomePage";
import NewArrivals from "../components/homePage/NewArrivals";
import TopSelling from "../components/homePage/TopSelling";
import BrowseDress from "../components/homePage/BrowserDress";

const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <NewArrivals />
      <TopSelling />
      <BrowseDress />
    </div>
  );
};

export default HomePage;