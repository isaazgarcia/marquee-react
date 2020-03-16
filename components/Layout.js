import styled from "@emotion/styled";
import React from "react";
import logo from '../assets/logo.svg';
import Link from "./common/Link";
import {fadeDown, fadeUp} from "./common/AnimationStyles";
// import data from "../data/download";

export default function Layout({pageTitle, children}) {
    const pages = [{slug:'/industries',title:'Industries'},{slug:'/services',title:'Services'},{slug:'/about-us',title:'About Us'}];
    // Option 2
    // const pages = data.pages.map(page => {return {title:page.title,slug:page.slug}});
    return (
        <>
            <Container>
                <Header>
                    <div>
                        <Link href="/"><Img src={logo} alt="abc"/></Link>
                        <LightButton>Contact Us</LightButton>
                    </div>
                    <MenuWrapper>
                        {pages.map(page=> <Link key={page.slug} href={page.slug}><MenuItem title={page.title}>{page.title}</MenuItem></Link>)}
                    </MenuWrapper>
                </Header>
                {children}
            </Container>
        </>
    );
}

const Img = styled.img`
  cursor:pointer;
  animation: ${fadeDown({percentageIn:`-30%`})} 750ms ;
  transition: 0.3s;
  &:hover{
      transform: translate(1px,1px);
  }
`;

const Container = styled.div`
    min-height: 100vh;
    width: calc((1180/1440) *100vw);
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
`;

const Header = styled.header`
  margin-top: 3vh;
`;

const MenuItem = styled.a`
    color:white;
    cursor:pointer;
    font-weight: bold;
    line-height: 1.85;
    font-size: 14px;
    transition: 0.3s;
    text-decoration: none;
    &.selected{
      color: var(--yellowColor);
    }
    &:hover{
      color: var(--yellowColor);
      transform: translate(1px, 1px);
    }
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-row-gap: 0.3rem;
  margin-top: 1rem;
  animation: ${fadeUp} 750ms ;
  @media only screen and (max-width: 375px) {
    grid-template-columns:  auto auto auto  ;
    margin-bottom: 1rem;    
  }
`;

const LightButton = styled.button`
  background: none;
  color: white;
  font-weight: bold;
  border: solid 1px ;
  width: 139px;
  height: 42px;
  float: right;
  transition: 0.4s;
  cursor:pointer;
  &:hover{
    background-color: var(--yellowColor);
  }
`;
