import styled from "styled-components";

export const Container = styled.div`
    width:370px;
    height:390px;
    background-color:black;
    display:flex;
    flex-direction:Column;
    padding:15px;
    border-radius:5px;
    align-items:center;
    justify-content:center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor:pointer;

    :hover{
      background-color:black; 
      transition:.5s;
      
      p{
        color:White;
      }
    }
    
    @media screen and (max-width: 425px) {
      width:100%; 
    }
`;

export const Img = styled.img`
  height:80%;
  width:80%;
  border-radius:5px;
`;

export const Text = styled.p`
  background-color:transparent;
  color:white;
  margin:0;
  text-align:center;
  padding:20px 0;
  font-size:20px;
  font-weight:bold;
`;