import React from "react";
import styled from "@emotion/styled";
import {fluidRange} from "polished";
import {Rorphans} from "../utils";
import {ApiUrl} from "../config";
import {fadeDown, fadeUp} from "./common/AnimationStyles";
import { motion } from 'framer-motion'

export const Marquee = ({headline = "", subhead = "", cta = "", background=""}) => {

    return (
        <>
            <MarqueeContent variants={marqueeVariants} exit="exit" initial="initial" animate="enter" whileHover={background && "hover"}>
                {background && <Img src={ApiUrl + '/' + background} alt={'marquee image'} variants={imageAnimation} transition={transition}/>}
                <Headline><Rorphans>{headline}</Rorphans></Headline>
                <Subhead><Rorphans>{subhead}</Rorphans></Subhead>
            </MarqueeContent>
            <Footer>
                <CallToAction><Rorphans>{cta}</Rorphans></CallToAction>
                <Contact>LET’S TALK. <span>→</span> </Contact>
            </Footer>
        </>
    )
};

const Img = styled(motion.img)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: -1;
   pointer-events: none;
   position: absolute;
`;

const MarqueeContent = styled(motion.div)`
  position: relative;
  overflow: hidden;
  z-index: 2;
  display: grid;
  grid-template-columns: 50% auto;
  color: white;
  align-items: center;
  padding-top: auto;
  @media only screen and (max-width: 800px) {
    grid-template-columns:  auto ;    
  }
`;

const Headline = styled.h1`
  min-font-size: 45px;
  font-size: ${fluidRange({prop: 'fontSize', fromSize: '42px', toSize: '84px',}, '260px', '1440px')};
  font-weight: bold;
  letter-spacing: -2.2px;
  line-height: 1;
  animation: ${fadeUp} 750ms ;
  margin: 1vw 0.5vw 1vw 0.5vw;
  transition: 0.3s;
  &:hover{
    transform: translate(5px);
  }
  @media only screen and (max-width: 800px) {
    align-self: end; 
    margin: 3vw;  
  }
  
`;

const Subhead = styled.p`
  font-size: ${fluidRange({prop: 'fontSize', fromSize: '14px', toSize: '18px',}, '1440px', '1920px')};
  line-height: 2;
  margin-right: 4vw;
  margin-left: 13vw;
  transition: 0.3s;
  &:hover{
    transform: translate(5px);
  }
  @media only screen and (max-width: 1440px) {
         font-size: 14px;
  }
  @media only screen and (max-width: 800px) {
        align-self: start;
        margin: 3vw;
        font-size: 14px; 
  }
`;

const Footer = styled.footer`
  background: white;
  height: calc((179/810) *100vh);
  max-height: 179px;
  min-height: 100px;
  display: grid;
  grid-template-columns: 50% auto;
  align-items: center;
  margin-top: auto;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto ;
    grid-gap: 0;
  }
  
`;

const CallToAction = styled.p`
    padding-left: 5vw;  
    margin:0;
    font-size: ${fluidRange({prop: 'fontSize', fromSize: '18px', toSize: '24px',}, '320px', '1440px')};
    font-weight: bold;
    transition: 0.3s;
    animation: ${fadeDown({percentageIn: `-50%`})} 750ms;
    &:hover{
      transform: translate(5px);
    }
    @media only screen and (max-width: 600px) {
     align-self: end;
     padding-right: 5vw;
    }
`;

const Contact = styled.a`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.3s;
    cursor:pointer;
    margin-left: 13vw;
    margin-right: auto;
    &:hover{
      color: var(--yellowColor);
      transform: translate(5px);
    }
    & > span {
      font-size: 20px;
      color: var(--yellowColor);
    }
    @media only screen and (max-width: 600px) {
     align-self: start;
    }
`;

const transition = { duration: 0.5, ease: [0.40, 0.10, 0.20, 0.95] };

const marqueeVariants = {
    initial: { scale: 0.5, opacity: 0, x: '30%', },
    enter: { scale: 1, opacity: 1,x: '0%', transition },
    exit: {scale: 0.5, x: '-30%', opacity: 0, transition: { duration: 1.5, ...transition },},
    hover: { scale: 0.99 }
};

const imageAnimation = {hover: { scale: 1.01 },};
