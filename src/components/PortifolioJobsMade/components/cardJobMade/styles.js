import styled from "styled-components";

export const Container = styled.div`
    width:370px;
    height:390px;
    background-color:transparent;
    display:flex;
    flex-direction:Column;
    padding:15px;
    border-radius:5px;
    align-items:center;
    justify-content:center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    cursor:pointer;
    :hover{
      background-color:black; 
      transition:.5s;
      p{
        color:White;
      }
    }
`;

export const Img = styled.img`
  height:80%;
  width:80%;
  border-radius:5px;
`;

export const Text = styled.p`
  background-color:transparent;
  color:black;
  margin:0;
  text-align:center;
  padding:20px 0;
  font-size:20px;
  font-weight:bold;
`;