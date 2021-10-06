import React from 'react'
import styled from "styled-components"
import img from "./media/logo.png"

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={img}/>
                <Navigation>
                    <Nav>About Us</Nav>
                    <Nav>Menu</Nav>
                    <Nav>Contact</Nav>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Nav = styled.div`
margin: 0 30px;
font-size: 20px;
font-weight: 900;
transition: all 250ms;

:hover {
    color: #F19A33;
    cursor: pointer;
}
`;

const Navigation = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`;

const Logo = styled.img`
width: 150px;
height: 51px;
object-fit: contain;
margin-left: 30px;
`;

const Container = styled.div`
width: 100%;
height: 100px;
background-color: #fff;
box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px;
z-index: 10;
position: fixed;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;


