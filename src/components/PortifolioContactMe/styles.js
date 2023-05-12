import styled from "styled-components";

export const Container = styled.div`
  width:100vw;
  height:50vh;
  background-color:#0D1214;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.p`
  font-weight:bold;
  font-size:38px;
  padding:0;
  margin:5;
  
  @media screen and (max-width: 1440px) {
    font-size:26px;
  }

  @media screen and (max-width: 768px) {
    font-size:22px;
  }
`;

export const Body = styled.div`
  height: 70%;
  width: 60%;
  background-color:white;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  
`;

export const Button = styled.button`
  width: 60%;
  height:50px;
  outline:none;
  border:none;
  border-radius:45px;
  font-family: 'Lato', sans-serif;
  font-family: 'Montserrat', sans-serif;
  background-color:black;
  color:White;
  cursor:pointer;
  opacity:.9;

  :hover{
    transition:.1s;
    transform:scale(1.05);
    opacity:1;
  }
`;