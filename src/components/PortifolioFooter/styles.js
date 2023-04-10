import styled from "styled-components";

export const Container = styled.div`
  height:30vh;
  width:100vw; 
  margin:0px;
  padding:0px;
  background-color:black;
  display:Flex;
  align-items:center;
  justify-content:center;
  flex-direction:Column;

  p{
    padding-top:15px;
    color:white;
  }

  .icon{
    padding:5px;
    cursor:pointer;
    background-color:black;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-color:black;
  }

`;

export const Socials = styled.div`
  display:flex;
  a{
    display:flex;
    align-items:center;
    justify-content:center;
    width:55px;
    height:55px;
    border:2px solid white;
    border-radius:45px;
    background-color:transparent;
    color:white;
    padding:8px;
    margin-right:35px;
    cursor:pointer;
    
    :hover{
      opacity:.9;
      background-color:White;
      color:black;
      transition:.3s;
    }
  }
`;