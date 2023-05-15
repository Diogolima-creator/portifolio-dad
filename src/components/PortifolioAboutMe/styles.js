import styled from "styled-components";

export const Container = styled.div`
  height:80vh;
  width:100vw;
  margin:0px;
  padding:0px;
  background-color:#0D1214;
  display:flex;
  align-items:Center;
  justify-content:center;

  @media screen and (max-width: 425px) {
    height:100vh;
  }
`;

export const Header = styled.div`
  width:100%;

  h1{
    top:-24%;
    left:20%;
    position:absolute;
    opacity:.1;
    color:grey;
    font-size:256px;
  }

  @media screen and (max-width: 1440px) {
    h1{
      top:-39%;
      left:15%;
    }
  }

  @media screen and (max-width: 1024px) {
    h1{
      top:-30%;
      font-size:216px;
    }
  }

  @media screen and (max-width: 768px) {
    h1{
      top:-19%;
      font-size:144px;
    }
  }

  @media screen and (max-width: 425px) {
    h1{
      top:-9%;
      font-size:96px;
    }
  }
`;

export const AboutMe = styled.div`
    display:flex;
    position:absolute;
    justify-content:center;
    width:70vw;
    height:400px;
    padding:20px;
`;

export const AboutMeTexts = styled.div`
  color:black;
  width:30%;
  display:flex;
  flex-direction:column;
  padding:0px 20px;

  @media screen and (max-width: 768px) {
    width:50%;
    padding:10px;
  }

  @media screen and (max-width: 425px) {
    font-size:16px;
    width:100%;
  }
  
`;

export const AboutMeTitle = styled.h1`
  font-size:34px;
  margin:20px 0;
  width:90%;
  font-weight:300;
  text-align:start;
  color:black;
  padding:8px 24px;
  background: linear-gradient(135deg, rgba(252, 215, 154, 1) 80%, transparent 20%);
  
  span{
    font-weight:bold;
  }

  @media screen and (max-width: 1440px) {
      font-size:28px;
      padding:8px 12px;
  }

  @media screen and (max-width: 1024px) {
      font-size:22px;
      width:100%;
  }

  @media screen and (max-width: 768px) {
    font-size:20px;
  }

  @media screen and (max-width: 425px) {
    font-size:16px;
    width:90%;
  }

`;

export const AboutMeParagraph = styled.p`
  font-size:16px;
  font-weight:400;
  width:100%;
  line-height:1.25rem;
  letter-spacing:0px;
  text-align: justify;
  color:white;
  font-weight:500;

  @media screen and (max-width: 768px) {
    font-size:14px;
  }
  @media screen and (max-width: 425px) {
    font-size:10px;
  }
`;

export const AboutMeImg = styled.div`
    width:30%;
    padding:20px;
    background: no-repeat url(https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg);
    background-size: 100% 100%;
    transition:1s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    :hover{
      background: no-repeat url(https://user-images.githubusercontent.com/62246037/230955378-49b56ade-4b60-4d43-9194-b7d32952a129.jpeg);
      background-size: 100% 100%;
      transition:1.5s;
    }

    @media screen and (max-width: 768px) {
      width:50%;
    }

    @media screen and (max-width: 1024px) {
      width:50%;
    }
`;