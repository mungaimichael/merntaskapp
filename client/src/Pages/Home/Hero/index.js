import React from "react";
import {
  HeroContainer,
  HeroContentWrapper,
  HeroImageWrap,
  HeroText,
  HeroTextWrapper,
} from "./Hero.Elements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentWrapper>
        <HeroImageWrap></HeroImageWrap>
        <HeroTextWrapper>
          <HeroText>
            a normal person tool to help you
            <span> better manage</span> your daily tasks
          </HeroText>
        </HeroTextWrapper>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
