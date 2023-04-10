import styled from "styled-components";

export const Container = styled.div`
  height:80vh;
  width:100vw;
  margin:0px;
  padding:0px;
  display:flex;
  align-items:Center;
  justify-content:center;
`;

export const Header = styled.div`
  width:100%;

  h1{
    top:-20%;
    left:13%;
    position:absolute;
    opacity:.1;
    color:grey;
    font-size:256px;
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
  width:40%;
  display:flex;
  flex-direction:column;
  padding:20px;
`;

export const AboutMeTitle = styled.h1`
  font-size:26px;
  letter-spacing:0px;
  font-weight:700;
  text-align:start;
`;

export const AboutMeParagraph = styled.p`
  font-size:16px;
  font-weight:400;
  width:100%;
  line-height:1.25rem;
  letter-spacing:0px;
  text-align: justify;
`;

export const AboutMeImg = styled.div`
    width:30%;
    padding:20px;
    background: no-repeat url(https://user-images.githubusercontent.com/62246037/230955372-bf484e8e-7b9c-4c3c-adfe-dc85bca40b74.jpeg);
    background-size: 100% 100%;
    transition:1.5s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    :hover{
      background: no-repeat url(https://user-images.githubusercontent.com/62246037/230955378-49b56ade-4b60-4d43-9194-b7d32952a129.jpeg);
      background-size: 100% 100%;
      transition:1.5s;
    }
`;