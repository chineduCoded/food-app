import React from 'react'
import styled from "styled-components";
import vege from "./media/vegetable.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutComp = () => {
    return (
        <Container>
        <Wrapper>
          <ImageContainer>
            <ImageHolder>
              <Image src={vege} />
            </ImageHolder>
          </ImageContainer>
          <Content>
            <Title>About Us</Title>
            <Desc>Few words about us</Desc>
            <Sub>
              We are not ordinary food truck. We create a place overflowing with
              positive energy that it expresses important to us values. Get to
              know them specifically.
            </Sub>
            <Button>Learn More <ArrowForwardIcon /></Button>
          </Content>
        </Wrapper>
      </Container>
    )
}

export default AboutComp

const ImageContainer = styled.div`
  width: 640px;
  height: 640px;
  position: relative;
  overflow: hidden;
  /* background-color: powderblue; */
`;
const ImageHolder = styled.div`
  width: 90%;
  height: 90%;
  background: #397546;
  border-radius: 50%;
  position: absolute;
  left: -180px;
`;
const Image = styled.img`
  width: 460px;
  height: 460px;
  object-fit: contain;
  position: absolute;
  top: 60px;
  right: -230px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`;
const Content = styled.div`
  width: 600px;
  dislay: flex;

  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  color: #f19a33;
`;
const Button = styled.div`
  width: 190px;
  height: 52px;
  background-color: #397546;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
  font-size: 18px;
  letter-spacing: 1px;
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
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 10px;
`;
const Sub = styled.div`
  font-size: 18.8px;
  font-weight: light;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* background-color: red; */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
