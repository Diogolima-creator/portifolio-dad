import styled from "styled-components";

export const Container = styled.div`
  height:100vh;
  width:100vw;
  background:no-repeat url(https://user-images.githubusercontent.com/62246037/230955347-e1414fb6-dbbe-47d6-8f3a-67bc914ba287.jpeg);
  background-size: 100% 100%;
  margin:0px;
  padding:0px;
  display:flex;
  flex-direction:column;

`;

export const Header = styled.div`
  height:15%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  
  @media screen and (max-width: 768px) {
    height:10%;
  }

  @media screen and (max-width: 425px) {
    align-items:start;
    justify-content:start;
  }

`;

export const Title = styled.div`
  padding:0;
  margin:0;
  color:white;
  width:40%;
  
  @media screen and (max-width: 768px) {
    width:40%;
  }

  @media screen and (max-width: 425px) {
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
  }

  img{
    width:650px;
    height:450px;

    @media screen and (max-width: 1440px) {
      width:350px;
      height:250px;
    }
    

  }

`;

export const Menu = styled.div`
  display:flex;
  align-items:center;
  height:100%;

  @media screen and (max-width: 425px) {
    display:none;
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

  @media screen and (max-width: 1440px) {
    font-size:14px;
  }
  
  @media screen and (max-width: 768px) {
    font-size:12px;
    margin:0 5px;
  }

  :hover{
    transform:scale(1.1);
    color:#fcd79a;
    transition:.5s;
  }
`;

export const Body = styled.div`
  width:100%;
  height:300px;
  display:flex;
  align-items:end;
  justify-content:end;
  
`;

export const BodyTexts = styled.div`
  color:white;
  width: 45%;

  @media screen and (max-width: 1440px) {
    margin-right:0px;
  }
`;

export const BodySubTitle = styled.h2`
  font-size:28px;
  font-weight:normal;

  span{
    color:Black;
    font-weight:bold;
  }

  @media screen and (max-width: 1440px) {
    font-size:20px;
  }

  @media screen and (max-width: 768px) {
    font-size:16px;
  }
`;

export const BodyTitle = styled.h1`
  font-size:36px;
  font-weight:normal;
  width:100%;
  margin:0;
  
  span{
    font-weight:bold;
  }
  @media screen and (max-width: 1440px) {
    font-size:30px;
  }

  @media screen and (max-width: 1280px) {
    font-size:26px;
  }

  @media screen and (max-width: 768px) {
    font-size:20px;
  }

`;


