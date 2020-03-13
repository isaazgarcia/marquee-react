// import Layout from "../components/Layout";
import styled from "@emotion/styled";
import {Button, GridContainer, Menu, MenuItem} from "react-foundation";
import React from "react";
import bg from '../public/static/img/slide-five.png';

const Container = styled(GridContainer)`
    min-height: 100vh;
`;

const MenuServiceItem = styled(MenuItem)`
    a{
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
    
        letter-spacing: normal;
        color: #ffffff;
        &:hover{
            color: #ffc004
        }
    }
`;

const Layout = styled.div`
  height: 100vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Background = styled.div`
  
`;

export default function Index() {
    return (
        <Layout img={bg}>
            {/*Layout UI*/}

            <Container >
                <Menu isVertical>
                    <MenuServiceItem><a>Industries</a></MenuServiceItem>
                    <MenuServiceItem><a>Services</a></MenuServiceItem>
                    <MenuServiceItem><a>About Us</a></MenuServiceItem>
                </Menu>



            {/*<div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">*/}
            {/*    <div className="title-bar-title">Menu</div>*/}
            {/*    <div className="text-right">*/}
            {/*        <button type="button" className="button">Search</button>*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="top-bar" >*/}
            {/*    <div className="top-bar-left">*/}
            {/*        <ul className="vertical menu" data-dropdown-menu>*/}
            {/*            <li className="menu-text">Site Title</li>*/}
            {/*            <li><a href="#0">Two</a></li>*/}
            {/*            <li><a href="#0">Three</a></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}

            {/*</div>*/}


        </Container>
    {/*Page UI*/
    }
    {/*Page UI (Includes Background.) */
    }

    {/*Headline*/
    }
    {/*Subhead*/
    }
    {/*Call to action*/
    }


</Layout>
);
}
