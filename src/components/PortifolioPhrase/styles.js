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
  padding:4% 0;
  padding-top:0;
`;

export const Title = styled.h1`
  width:50%;
  color:white;
  font-size:20px;
  font-style:italic;
  text-align:center;

  @media screen and (max-width: 1440px) {
    font-size:16px;
  }

  @media screen and (max-width: 1280px) {
    font-size:14px;
  }

  @media screen and (max-width: 768px) {
    font-size:12px;
  }

  @media screen and (max-width: 425px) {
    width:100%;
    font-size:9px;
  }
`;