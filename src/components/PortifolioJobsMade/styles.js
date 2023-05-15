import styled from "styled-components";

export const Container = styled.div`
  height:100vh;
  width:100vw;
  background-color:#0D1214;
  margin:0px;
  padding:0px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  

  .swiper-wrapper{
    height: 500px;
  }

  .swiper-pagination-bullet{
    color:black;
    background-color:white;
  }
`;

export const TitleDiv = styled.div`
  width:75%;
  display:flex;
  align-items:end;
  justify-content:start;
  height:45%;

  @media screen and (max-width: 1440px) {
    width:85%;
  }

  @media screen and (max-width: 1024px) {
      width:90%;
  }

  @media screen and (max-width: 768px) {

  }
`;

export const Title = styled.h1`
  font-size:44px;
  color:black;
  font-weight:300;
  padding: 12px 42px;
  background: linear-gradient(135deg, rgba(252, 215, 154, 1) 80%, transparent 20% );
  width:55%;

  span{
    font-weight:bold;
  }

  @media screen and (max-width: 1440px) {
    font-size:38px;
    padding: 12px 32px;
    width:55%;
  }

  @media screen and (max-width: 1024px) {
      font-size:32px;
      padding: 12px 32px;
      width:60%;
  }

  @media screen and (max-width: 768px) {
    font-size:28px;
    padding: 12px 32px;
    width:75%;
  }

  @media screen and (max-width: 425px) {
    font-size:18px;
    padding: 12px 32px;
    width:80%;
  }

`;


export const Header = styled.div`
  width:100%;

  h1{
    left:12%;
    margin:0px;
    padding:0;
    position:absolute;
    opacity:.1;
    color:grey;
    font-size:256px;
  }

  @media screen and (max-width: 1440px) {
    h1{
      top:2%;
      left:8%;
      font-size:216px;
    }
}

@media screen and (max-width: 1024px) {
  h1{
    top:4%;
    left:5%;
    font-size:156px;
  }
}

@media screen and (max-width: 768px) {
  h1{
    top:3%;
    left:5%;
    font-size:126px;
  }
}

@media screen and (max-width: 425px) {
  h1{
    top:3%;
    left:5%;
    font-size:70px;
  }
}
`;

export const Body = styled.div`
  height:100%;
  width:75%;
  display:flex;
  align-items:center;
  justify-content:center;


  @media screen and (max-width: 1440px) {
    width:95%;
  }

  @media screen and (max-width: 1280px) {
    width:80%;
  }

  @media screen and (max-width: 1024px) {
    width:90%;
  }

  @media screen and (max-width: 768px) {
    width:55%;
  }

  @media screen and (max-width: 425px) {
    width:100%;
  }
`;