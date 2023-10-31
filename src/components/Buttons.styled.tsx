import styled, { css } from "styled-components";


export const fontStyles = css`
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
`


const StyleBtn = styled.button`
width: 86px;
height: 30px;
border-radius: 5px;
border: 2px;
background-color: transparent;
${fontStyles};
`

export const SeeMoreBtn = styled(StyleBtn)`
background-color: ${({theme})=> theme.colors.primory};
color: white;
margin-right: 12px;
`

export const SaveBtn = styled(StyleBtn)`
color: ${({theme})=> theme.colors.primory};
border: 2px solid ${({theme})=> theme.colors.primory};
background-color: white;
`