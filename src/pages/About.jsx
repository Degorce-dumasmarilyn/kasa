// eslint-disable-next-line no-unused-vars
import React from "react";
import { ImageBanner } from "../components/ImageBanner";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./About.scss";

function About() {
  return (
  <>
    <ImageBanner />
    <div className="about__container">
        <DescriptionPanel title="Fiabilité" content="c'est trés important" />
        <DescriptionPanel title="Respect" content="c'est trés important" />
        <DescriptionPanel title="Service" content="c'est trés important" />
        <DescriptionPanel title="Responsabilité" content="c'est trés important" />
    </div>
  </>
  ); 
}

export default About;
