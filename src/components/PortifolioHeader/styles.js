import styled from "styled-components";

export const Container = styled.div`
  height:100vh;
  width:100vw;
  background:no-repeat url(https://user-images.githubusercontent.com/62246037/230955347-e1414fb6-dbbe-47d6-8f3a-67bc914ba287.jpeg);
  background-size: 100% 100%;
  margin:0px;
  padding:0px;
`;

export const Header = styled.div`
  height:15%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`;

export const Title = styled.div`
  padding:0;
  margin:0;
  color:white;
  

  img{
    width:650px;
    height:450px;
  }

  @keyframes slide-left {
    0% {
              opacity:0;
              transform: translate3d(-200px,0,0);
    }
    100% {
              opacity: 1;
              transform: translate3d(0,0,0);
  }

`;

export const Menu = styled.div`
  display:flex;
  align-items:center;
  height:100%;

  

  @keyframes slide-right {
    0% {
              opacity:0;
              transform: translateX(200px);
    }
    100% {
              opacity:1;
              transform: translateX(0px);
    }
  }
`;

export const MenuItem = styled.a`
  padding:0;
  margin:0 10px;
  cursor:pointer;
  color:white;
  font-size:16px;
  font-weight:700;
  text-decoration:none;

  :hover{
    transform:scale(1.1);
    color:black;
    transition:.5s;
  }
`;

export const Body = styled.div`
  width:100%;
  height:300px;
  display:flex;
  align-items:end;
  justify-content:end;

  animation: slide-top 0.75s ease-in; 

  @keyframes slide-top {
    0% {
              opacity:0;
              transform: translateY(200px);
    }
    100% {
              opacity:1;
              transform: translateY(0px);
    }
  }
`;

export const BodyTexts = styled.div`
  color:white;
  width:600px;
  margin-right:250px;
`;

export const BodySubTitle = styled.h2`
  font-size:26px;
`;

export const BodyTitle = styled.h1`
  font-size:36px;
`;


