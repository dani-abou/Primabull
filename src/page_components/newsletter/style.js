import { Card, Paper } from "@mui/material"
import styled from "styled-components"
import { PrimabullBody1, PrimabullH5 } from "../../common/styles"
import { screenSizes } from "../../common/styles/screenSizes"
import PrimabullCard from "../../components/PrimabullCard/PrimabullCard"

export const StyledSurface = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%);
  width: 100vw;
  background-color: ${props => props.theme.colors.background.hexa()}	;

`

export const StyledLogoDiv = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  margin-left: 50%;
  transform: translate(-50%);
`

export const StyledFormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  margin-left: 50%;
  transform: translate(-50%);

  @media screen and (max-width: ${screenSizes.mobile.max}) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 80vw;
  }
`

export const StyledSection = styled.div`
  width: 100%;
  /* padding: 50px 20px; */
  padding-bottom: 50px;
  ${props => props.$greyed && `background-color: ${props.theme.colors.background.darken(0.1).hexa()};`}


`

export const StyledExamplesFlex = styled.div`
  display:flex;
  margin-left: 50%;
  transform: translate(-50%);
  justify-content: space-around;
  align-items: stretch;
  gap: 10px;
  width: 80%;

  @media screen and (max-width: ${screenSizes.mobile.max}) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
  }

`

export const StyledExamplesPaper = styled(PrimabullCard)`
  height: 300px;
  width: 250px;
  background-color: #f7f7f7;

  @media only screen and (max-width: ${screenSizes.tablet.max}) and (min-width: ${screenSizes.tablet.min})  {
    height: 350px;
  }

  
`

export const StyledExampleDescription = styled(PrimabullBody1)`
  height: 75px;
  overflow: hidden;
`

export const StyledPrice = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
`

export const StyledMissionStatement = styled(PrimabullH5)`
  text-align: center;

    @media screen and (max-width: ${screenSizes.mobile.max}) {
      margin-left: 20px;
      margin-right: 20px;
  }
`