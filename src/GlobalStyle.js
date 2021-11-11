import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
     
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Mochiy Pop P One', sans-serif;
    background-color: #70DB9D;
    color: white;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  
  
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index:200;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
  .backDrop{
     position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 900;
  background: rgba(0, 0, 0, 0.75);
  }
`;


export const ContainerStyle = styled.div`
height: 510px;
width: 800px;
background-color: #12A869;
border: 3px white solid;
position: absolute;
top: 80px;
left: 0;
right: 0;
bottom: 0;
margin: auto;
border-radius: 20px;
padding: 20px;
`

export const Container = (props) => {
  return (
    <ContainerStyle>{props.children}</ContainerStyle>
  )
}

export const GlobalButton = styled.button`
width: ${(props) => props.width ? props.width : '140px'};
padding:10px 20px;
font-family: 'Mochiy Pop P One', sans-serif;
 background-color: #70DB9D;
 color: white;
font-size: 2.5rem;
border-radius: 10px;
outline: #70DB9D;
cursor: pointer;
 :hover{
  transform: scale(1.1);
}
`
export const GlobalInput = styled.input`
padding: 15px 15px;
width: 100%;
border-radius: 10px;
outline: #70DB9D;
`

export const Question = styled.h1`

`

export default GlobalStyles;
