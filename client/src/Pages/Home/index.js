import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { HomepageWrapper } from "./Home.Elements";

const HomePage = () => {
  return (
    <HomepageWrapper>
      <Header />
      <Hero />
    </HomepageWrapper>
  );
};

export default HomePage;
