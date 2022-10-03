import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
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
      <MainBackground>
        <Navbar />
        <Hero />
      </MainBackground>
      <PrinkDescription />
      <PrinkFeatures />
      <Footer />
    </>
  );
};

export default Home;

const MainBackground = styled.div`
  min-height: 100%;
  background-image: url("./mainpattern.png");
  background-size: contain;
  background-repeat: repeat;
`;
