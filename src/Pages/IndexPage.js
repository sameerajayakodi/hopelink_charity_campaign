import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Hero from '../Components/Hero.js';
import Features from '../Components/Features.js';
// import Carousel from '../Components/Carousel.js';
import Campaign from '../Components/Campaign';
import CardContainer from '../Components/CardContainer.js';
import Banner from '../Components/Banner.js';
import GetStarted from '../Components/GetStarted.js';
import '../css/LandingPage.css';

export default function IndexPage() {
  return (
    <div className="LandingPage">
      <Hero />
      <Features />
      {/* <Carousel /> */}
      <Campaign />
      <CardContainer />
      <Banner />
      <GetStarted />
    </div>
  );
}
