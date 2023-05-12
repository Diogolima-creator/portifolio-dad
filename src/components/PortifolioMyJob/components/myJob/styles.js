import styled from "styled-components";

export const Container = styled.div`
    width:80%;
    height:90%;
    padding:20px;
    margin:5px 0;
    cursor:default;
    border-radius:15px;
    color:white;
    transition:.5s;

    :hover{
      box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
      color:white;
      transform:scale(1.01);
    }

    @media screen and (max-width: 1024px) {
      width:90%;
      height:80%;
    }
`;

export const Icon = styled.div`
  width:85px;
  height:85px;
  color:#fcd79a;
`;

export const SubTitleCircle = styled.div`
    display:flex;
    margin-top:15%;
    width:100%;
    align-items:start;
    justify-content:start;
`;


export const SubTitle = styled.p`
    font-weight:bold;
    font-style:italic;
    margin:0px;
    font-size:14px;
    padding:0;
    width:80%;
    height:100%;
    text-align: justify-all;
`;

export const Circle = styled.div`
      display:flex;
      padding:7px;
      width:3px;
      margin-right:5px;
      height:2px;
      background-color:#fcd79a;
      border-radius:45px;
`;

export const Title = styled.h1`
  font-size:22px;
  margin:5px 0;
  padding:0;
  cursor:default;
  letter-spacing:1px;
  color:#fcd79a;


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