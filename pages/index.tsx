import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import PrinkDescription from "../components/PrinkDescription";
import PrinkFeatures from "../components/PrinkFeatures";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prink | Create short fashion videos</title>
        <meta
          name="description"
          content="Create Fashion Videos, discover latest trends and inspire others who follows you, A new social media platform dedicated to fashion."
          key="desc"
        />
        <meta
          property="og:title"
          content="Prink | Create short fashion videos"
        />
        <meta
          property="og:description"
          content="Create Fashion Videos, discover latest trends and inspire others who follows you, A new social media platform dedicated to fashion."
        />
        {/* <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        /> */}
      </Head>
      <Hero />
      <PrinkDescription />
      <PrinkFeatures />
    </>
  );
};

export default Home;
