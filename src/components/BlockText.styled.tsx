import styled from "styled-components"

export const BlockText = styled.div`
margin-left: 20px;
`

export const Heading = styled.h1`
font-family: Inter;
font-size: 16px;
font-weight: 700;
text-align: left;
margin-bottom: 20px;
`

export const Text = styled.p`
font-family: Inter;
font-size: 12px;
font-weight: 500;
margin-bottom: 19px;
color: ${({ theme }) => theme.colors.secondory};
`

