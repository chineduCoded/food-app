import React from 'react'
import styled from "styled-components"
import img from "./media/food.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import pepper from "./media/pepper.png"

const HeroScreen = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>Healthy & Fresh Food For You</Title>
                    <Desc>
                    Created for lovers of healthy delicious and non-obvious food.
                    </Desc>
                    <Button>Check Menu <ArrowForwardIcon /></Button>
                    <BgImageHolder>
                        <BgImage src={pepper} />
                    </BgImageHolder>
                </Content>
                <ImageHolder>
                    <ImageView>
                        <Image src={img} />
                    </ImageView>
                </ImageHolder>
            </Wrapper>
        </Container>
    )
}

export default HeroScreen

const BgImage = styled.img`
width: 200px;
height: 206px;
`;


const BgImageHolder = styled.div`
position: relative;
overflow: hidden;
left: -90px;
`;

const Image = styled.img`
width: 470px; 
height: 470px;
position: absolute;
top: 150px;
object-fit: cover;
tranform: scale(1);
transition: all 350ms;

:hover {
    transform: scale(0.93);
}
`;


const ImageView = styled.div`
width: 100%;
height: 100%;
border-radius: 50%;
position: absolute;
top: -100px;
right: -70px;
background-color: #387546;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`


const Button = styled.div`
width: 200px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
outline: none;
border: 0;
background-color: #f19a33;
color: #fff;
font-weight: bold;
letter-spacing: 1px;
border-radius: 7px;
box-shadow: rgb(0 0 0 / 39%) 0px 26px 30px -10px;
transform: scale(1.0);
transition: all 350ms;
margin-bottom: 60px;

.MuiSvgIcon-root {
    margin-left: 5px;
}

:hover {
    cursor: pointer;
    transform: scale(0.93);
    box-shadow: rgb(0 0 0 /19%) 0px 26px 30px -10px;
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;

}
`;

const Desc = styled.div`
font-size: 20.8px;
margin-bottom: 30px;
`;

const Title = styled.div`
width: 100%;
font-size: 51.2px;
font-weight: 800;
line-height: 1.3;
margin-bottom: 0.5em;
`;

const ImageHolder = styled.div`
width: 700px;
height: 700px;
position: relative;
overflow: hidden;
`;


const Content = styled.div`
width: 500px;
display: flex;
padding-top: 70px;
flex-direction: column;
margin-left: 50px;
`;

const Wrapper = styled.div`
width: 100%;
height: 642px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: linear-gradient(#b6cba7, #fafafa);
padding-top: 100px;
`;

