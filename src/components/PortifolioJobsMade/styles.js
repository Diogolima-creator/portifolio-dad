import styled from "styled-components";

export const Container = styled.div`
  height:100vh;
  width:100vw;
  background-color: white;
  margin:0px;
  padding:0px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
  .swiper-wrapper{
    height:500px;
  }

  .swiper-pagination-bullet{
    color:black;
    background-color:black;
  }
`;

export const Title = styled.h1`
  font-size:74px;
  margin:0;
  padding:0;
  margin-top:150px;
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
`;

export const Body = styled.div`
  height:100%;
  width:75%;
  display:flex;
  align-items:center;
  justify-content:center;
  
`;