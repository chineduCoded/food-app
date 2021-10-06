import React from 'react'
import styled from "styled-components"
import HeaderNav from "./HeaderNav"
import HeroScreen from './HeroScreen'
import AboutComp from './AboutComp'
import MenuComp from './MenuComp'
import GalleryComp from "./GalleryComp"
import FooterComp from "./FooterComp"

const FoodScreen = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderNav />
                <HeroScreen />
                <AboutComp />
                <MenuComp />
                <GalleryComp />
                <FooterComp />
            </Wrapper>
        </Container>
    )
}

export default FoodScreen

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #fafafa;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
