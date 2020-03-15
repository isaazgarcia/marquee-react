import React from "react";
import styled from "@emotion/styled";
import {fluidRange} from "polished";
import {Rorphans} from "../utils";
import {ApiUrl} from "../config";
import {fadeDown, fadeUp} from "./common/styles";

export const Marquee = ({headline="",subhead="",cta="",background}) => {
    return (
        <>
            <MarqueeContent img={background}>
                <Headline><Rorphans>{headline}</Rorphans></Headline>
                <Subhead><Rorphans>{subhead}</Rorphans></Subhead>
            </MarqueeContent>
            <Footer>
                <CallToAction>{cta}</CallToAction>
                <Contact>LET’S TAlk. <span>→</span> </Contact>
            </Footer>
        </>
    )
};

const MarqueeContent = styled.div`
  background-image: url(${props => props.img?ApiUrl+'/'+props.img :'' });  
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 50% auto;
  color: white;
  align-items: center;
  padding-top: auto;
  @media only screen and (max-width: 600px) {
    grid-template-columns:  auto ;    
  }

`;

const Headline = styled.h1`
  min-font-size: 45px;
  font-size: ${fluidRange({prop: 'fontSize', fromSize: '42px', toSize: '84px',}, '320px', '1440px')};
  font-weight: bold;
  letter-spacing: -2.2px;
  line-height: 1;
  animation: ${fadeUp} 750ms ;
  @media only screen and (max-width: 600px) {
        align-self: end; 
        margin: 0;
  }
  
`;

const Subhead = styled.p`
  font-size: 14px;
  line-height: 2;
  animation: ${fadeUp} 750ms ;
  margin-right: 4vw;
  margin-left: 13vw;
  @media only screen and (max-width: 600px) {
        align-self: start;
        margin: 0 1vw 0 1vw;
        font-size: 14px; 
  }
`;

const Footer = styled.footer`
  background: white;
  height: calc((179/810) *100vh);
  display: grid;
  grid-template-columns: 50% auto;
  align-items: center;
  margin-top: auto;
  animation: ${fadeDown} 750ms ;
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
    @media only screen and (max-width: 600px) {
     align-self: end;
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
    &:hover{
      color: #ffc004;
    }
    & > span {
      font-size: 20px;
      color: #ffc001;
    }
    @media only screen and (max-width: 600px) {
     align-self: start;
    }
`;
