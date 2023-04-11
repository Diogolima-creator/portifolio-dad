import styled from "styled-components";

export const Container = styled.div`
    width:80%;
    height:80%;
    padding:15px;
    margin:5px 0;
    cursor:default;
    border-radius:15px;
    
    :hover{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      transition:.5s;
      background-color:black;
      color:white;
    }

    @media screen and (max-width: 1024px) {
      width:90%;
      height:80%;
    }
`;

export const Icon = styled.div`
  width:85px;
  height:85px;

`;

export const Title = styled.h1`
  font-size:22px;
  margin:5px 0;
  padding:0;
  cursor:default;
  letter-spacing:1px;

  @media screen and (max-width:768px) {
    font-size:14px;
  }
`;

export const Paragraph = styled.p`
    font-size:16px;
    margin:0px;
    padding:0;
    cursor:default;
    letter-spacing:0px;
    text-align: justify-all;

    @media screen and (max-width:768px) {
      font-size:12px;
    }
`;