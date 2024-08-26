import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
export const LogoWrap = styled.div`
  width:100%;
  margin-top:20rem;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
export const Logo = styled.img`
  width:7rem;
`
export const Title = styled.h1`
  font-size:3rem;
  font-weight:400;
  margin-top:2rem;
`
export const ButtonWrap = styled.div`
  width:100%;
  padding:0 4rem;
  box-sizing:border-box;
`

export const Login = styled.button`
  width: 100%;
  height: 5rem;
  background-color: #34c831;
  border: none;
  outline: none;
  border-radius: 1rem;
  margin-bottom:1rem;
  font-size: 2rem;
  color: white;
  font-weight: 400;
  transition: all 0.1s;
  cursor: pointer;
  &:active {
    background-color: #28a426;
  }
`;

export const Signup = styled.button`
  width: 100%;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  border-radius: 1rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: black;
  font-weight: 400;
  transition: all 0.1s;
  cursor: pointer;
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;