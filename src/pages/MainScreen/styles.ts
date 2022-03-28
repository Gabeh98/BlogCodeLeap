import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #fff;
  width: 50%;
  @media (max-width:1600px){
    width: 80%;
  }
  @media (max-width:1250px){
    width: 90%;
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #000;
  height: 80px;
  align-items: center;
  width: 100%;
  div {
    margin: 2%;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
`;
