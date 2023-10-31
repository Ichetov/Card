import styled from "styled-components";
import img from './../Rectangle.svg'
import { Img } from "./Img.styled";
import { BlockText, Heading, Text } from "./BlockText.styled";
import { SaveBtn, SeeMoreBtn } from "./Buttons.styled";

const ComponentCard = () => {

    return (
        <Card>
            <Img src={img} />
            <BlockText>
                <Heading>Headline</Heading>
                <Text>
                    Faucibus. Faucibus. Sit sit sapien sit<br />
                    tempusrisu ut. Sit molestie ornare in venen.
                </Text>
                <SeeMoreBtn>See more</SeeMoreBtn>
                <SaveBtn>Save</SaveBtn>
            </BlockText>

        </Card>
    )
}


const Card = styled.div`
width: ${({ theme }) => theme.sizes.width}px;
height: ${({ theme }) => theme.sizes.height}px;
border-radius: 15px;
box-shadow: 0px 4px 20px 5px #0000001A;
`





export default ComponentCard