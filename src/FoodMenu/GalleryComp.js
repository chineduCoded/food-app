import React from 'react'
import styled from "styled-components"
import data from "./image.json"

const GalleryComp = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Good food = happy clients</Title>
                <Gallery>
                    {
                        data.map((props) => (
                            <Image key={props.id} src={props.img} />
                        ))
                    }
                </Gallery>
            </Wrapper>
        </Container>
    )
}

export default GalleryComp

const Image = styled.img`
width: 300px; 
height: 240px; 
margin: 7px;
border-radius: 3px;
object-fit: cover;
transform: scale(1);
transition: all 350ms;

:hover {
    transform: scale(1.05);
}
`;

const Gallery = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const Title = styled.div`
margin-top: 50px;
margin-bottom: 20px;
font-size: 50px;
font-weight: 700;
text-align: center;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
