import styled from "styled-components";

export const Container = styled.div`
  height:170vh;
  width:100vw;
  margin:0px;
  padding:0px;
  display:flex;
  background-color:#0D1214;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const Header = styled.div`
  width:100%;
  z-index:-1;

  h1{
    z-index:-1;
    top:-6%; 
    left:13%;
    position:absolute;
    opacity:.1;
    color:grey;
    font-size:256px;
  }

  @media screen and (max-width: 1440px) {
      h1{
        top:-10%;
        left:5%;
        font-size:246px;
      }
  }

  @media screen and (max-width: 1024px) {
    h1{
      top:-10%;
      left:5%;
      font-size:186px;
    }
  }

  @media screen and (max-width: 768px) {
    h1{
      top:0%;
      left:5%;
      font-size:136px;
    }
  }
`;

export const SubHeader = styled.div`
  width:100%;
  height:15%;
  text-align:center;
`;

export const SubHeaderTitle = styled.h1`
  font-size:74px;
  color:white;
  @media screen and (max-width:768px) {
    font-size:54px;
  }
`;

export const Body = styled.div`
  height:65%;
  width:70%;
  display:grid;
  grid-template-columns: auto auto auto;
  gap:0;

  @media screen and (max-width: 1440px) {
    width:90%;
    height:100%;
  }
`;