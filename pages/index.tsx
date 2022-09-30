import type { NextPage } from "next";
import Hero from "../components/Hero/Hero";
import PrinkDescription from "../components/PrinkDescription";
import PrinkFeatures from "../components/PrinkFeatures";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <PrinkDescription />
      <PrinkFeatures />
    </>
  );
};

export default Home;
