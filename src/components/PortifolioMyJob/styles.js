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

  @media screen and (max-width: 425px) {
    height:100%;
  }
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
    font-size:206px;
  }

  @media screen and (max-width: 1440px) {
      h1{
        top:-10%;
        left:5%;
        font-size:176px;
      }
  }

  @media screen and (max-width: 1024px) {
    h1{
      top:-10%;
      left:5%;
      font-size:146px;
    }
  }

  @media screen and (max-width: 768px) {
    h1{
      top:2%;
      left:5%;
      font-size:106px;
    }
  }

  @media screen and (max-width: 425px) {
    h1{
      top:1%;
      font-size:60px;
    }
  }
`;

export const SubHeader = styled.div`
  width:70%;
  height:15%;
  display:flex;
  align-items:center;
  justify-content:start;

  @media screen and (max-width: 1440px) {
    width:90%;
  }

`;

export const SubHeaderTitle = styled.h1`
  font-size:44px;
  color:black;
  text-align:start;
  font-weight:300;
  width:40%;
  padding: 12px 42px;
  background: linear-gradient(135deg, rgba(252, 215, 154, 1) 80%, transparent 20% );

  span{
    font-weight:700;
  }

  @media screen and (max-width: 1440px) {
    font-size:38px;
    padding: 12px 32px;
  }

  @media screen and (max-width: 1024px) {
      font-size:32px;
      padding: 12px 32px;
      width:45%;
  }

  @media screen and (max-width: 768px) {
    font-size:28px;
  }

  @media screen and (max-width: 425px) {
    font-size:22px;
    width:55%;
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

  @media screen and (max-width: 425px) {
    grid-template-columns: auto;
  }
`;