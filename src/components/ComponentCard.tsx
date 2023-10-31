import styled from "styled-components";
import img from './Rectangle.svg'

const ComponentCard = (props: any) => {
    return (
        <Card>
            <Img src={img} />
            <Block>
                <Heading>Headline</Heading>
                <Text>
                    Faucibus. Faucibus. Sit sit sapien sit<br />
                    tempusrisu ut. Sit molestie ornare in venen.
                </Text>
                <SeeMoreBtn>See more</SeeMoreBtn>
                <SaveBtn>Save</SaveBtn>
            </Block>

        </Card>
    )
}


const Card = styled.div`
width: 300px;
height: 350px;
border-radius: 15px;
box-shadow: 0px 4px 20px 5px #0000001A;
`

const Img = styled.img`
width: 280px;
height: 170px;
border-radius: 10px;
margin: 10px 10px 20px 10px;
`
const Block = styled.div`
margin-left: 20px;
`

const Heading = styled.h1`
font-family: Inter;
font-size: 16px;
font-weight: 700;
text-align: left;
margin-bottom: 20px;
`




const Text = styled.p`
font-family: Inter;
font-size: 12px;
font-weight: 500;
margin-bottom: 19px;
color: #ABB3BA;
`

const StyleBtn = styled.button`
width: 86px;
height: 30px;
border-radius: 5px;
border: 2px;
font-family: Inter;
font-size: 10px;
background-color: transparent;
`

const SeeMoreBtn = styled(StyleBtn)`
background-color: #4E71FE;
color: white;
margin-right: 12px;
`

const SaveBtn = styled(StyleBtn)`
color: #4E71FE;
border: 2px solid #4E71FE;
background-color: white;
`

export default ComponentCard