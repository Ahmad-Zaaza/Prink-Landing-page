import type { NextPage } from "next";
import Hero from "../components/Hero/Hero";
import PrinkDescription from "../components/PrinkDescription";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <PrinkDescription />
    </>
  );
};

export default Home;
