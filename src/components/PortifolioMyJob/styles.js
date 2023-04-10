import styled from "styled-components";

export const Container = styled.div`
  height:170vh;
  width:100vw;
  margin:0px;
  padding:0px;
  display:flex;
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
`;

export const SubHeader = styled.div`
  width:100%;
  height:15%;
  text-align:center;
`;

export const SubHeaderTitle = styled.h1`
  font-size:74px;
`;

export const Body = styled.div`
  height:65%;
  width:70%;
  display:grid;
  grid-template-columns: auto auto auto;
  gap:0;
`;