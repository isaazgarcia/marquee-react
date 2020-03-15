import styled from "@emotion/styled";
import React from "react";
import bg from '../assets/img/slide-one.png';
import logo from '../assets/logo.svg';
import {NextSeo} from 'next-seo';
import Link from "./common/Link";

export default function Layout({pageTitle, children}) {
    return (
        <BodyImage img={bg}>
            <NextSeo title={pageTitle} description={pageTitle}/>
            <Container>
                <Header>
                    <div>
                        <Link href="/"><Img src={logo} alt="abc"/></Link>
                        <LightButton>Contact Us</LightButton>
                    </div>
                    <MenuWrapper>
                        <Link href={"/industries"}><a>Industries</a></Link>
                        <Link href={"/services"}><a>Services</a></Link>
                        <Link href={"/about-us"}><a>About Us</a></Link>
                    </MenuWrapper>
                </Header>
                {children}
            </Container>
        </BodyImage>
    );
}

const Img = styled.img`
  cursor:pointer;
`;

const BodyImage = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

const MenuWrapper = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-row-gap: 0.3rem;
  margin-top: 1rem;
  
  a {
    color:white;
    font-weight: bold;
    line-height: 1.85;
    font-size: 14px;
    transition: 0.3s;
    &.selected{
      color: #ffc004;
    }
    &:hover{
      color: #ffc004
    }
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
    background-color: #ffc004;
  }
`;
