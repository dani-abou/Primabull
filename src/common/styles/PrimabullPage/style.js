import { Paper } from '@mui/material';
import styled from "styled-components";
import { media } from '../screenSizes';

export const StyledBackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;

  ${props => props.$showImg ? `

  background: linear-gradient(rgba(150, 150, 150, 0.1), rgba(0, 0, 0, 0.4)), url('/cows.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover`:

    `
  background-color: ${props.theme.colors.background.hexa()};
  background-position: fixed;
  `
  }

  &::-webkit-scrollbar {
  display: none;

  ${() => media.mobile(`
    width: 100dvw;
    height: 130dvh;
    padding-top: 40px;
    padding-bottom: 40px;
  `)}
}
`

export const StyledWholePage = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: visible;
  overflow-x: hidden;


  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  
  
`


export const StyledBodyDiv = styled.div`
  flex: 1 0 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  overflow-x: hidden;


  ${() => media.mobile(`
    min-height: 110dvh;
  `)}
`

export const StyledBackgroundDiv = styled(Paper)`
  flex: 1 0 100%;
  margin: ${props => props.$noNavbar ? '0' : '40px'} 0 0;
  position: relative;
  background-color: transparent;
`


export const StyledNavbarDiv = styled.div`
flex: 0 0 150px;
max-height: ${props => props.$skinny ? '75px' : '150px'};
overflow: hidden;
transition: all 0.2s ease - out;
  &::-webkit-scrollbar {
  display: none;
}
`

export const StyledFooterDiv = styled.div`
flex: 0 0;
background-color: ${props => props.theme.colors.footer.hexa()};
`

