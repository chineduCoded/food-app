import React from 'react'
import styled from "styled-components";
import myData from "./data.json"

const MenuComp = () => {
    return (
        <Container>
      <Wrapper>
        <Title>Menu</Title>
        <Desc>Explore Our Best Food</Desc>
        <Para>Below you can see our best selling meals!</Para>

        <GalleryContainer>
          {myData.map((eli) => (
            <Card key={eli.id}>
              <Image src={eli.img} />
              <Content>
                <Name>{eli.name}</Name>
                <Price>{eli.price}#</Price>
              </Content>
              <Text>{eli.desc}</Text>
            </Card>
          ))}
        </GalleryContainer>
      </Wrapper>
    </Container>
  );
}

export default MenuComp

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  color: #f19a33;
  font-size: 30px;
`;
const Desc = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Para = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
`;
const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 10px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: all 350ms;
  box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px;

  :hover {
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 10%) 0px 26px 30px -10px,
      rgb(0 0 0 / 10%) 0px 16px 10px -10px;
  }
`;
const Name = styled.div`
  margin-left: 20px;
`;
const Text = styled.div`
  margin: 20px;
`;
const Price = styled.div`
  margin-right: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;
