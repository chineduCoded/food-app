import React from 'react'
import styled from "styled-components"

const FooterComp = () => {
    return (
        <Container>
            <Wrapper>
                <InfoWrapper>
                    <Div>1</Div>
                    <Div>2</Div>
                    <Div>3</Div>
                </InfoWrapper>
                <FooterWrapper>Footer goes here</FooterWrapper>
            </Wrapper>
        </Container>
    )
}

export default FooterComp

const FooterWrapper = styled.div``;

const InfoWrapper = styled.div``;

const Div = styled.div`
width: 300px;
height: 150px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 80px;
text-align: center;
box-shadow: #000000 0px 10px 20px 0px
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;

