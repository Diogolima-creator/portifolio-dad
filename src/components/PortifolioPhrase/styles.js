import styled from "styled-components";

export const Container = styled.div`
  height:100%;
  width:100vw;
  margin:0px;
  padding:0px;
  display:flex;
  background-color:#0D1214;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:2% 0;
  padding-bottom:7%;
`;

export const Title = styled.h1`
  width:70%;
  color:white;
  font-size:26px;
  font-style:italic;
  text-align:center;

  @media screen and (max-width: 1440px) {
    font-size:24px;
  }

  @media screen and (max-width: 1280px) {
    font-size:20px;
  }

  @media screen and (max-width: 768px) {
    font-size:16px;
  }
`;