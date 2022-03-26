import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  align-items: center;
  width: auto;
  overflow: hidden;
`;

export const Form = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  height: 30%;
  gap: 30px;
  justify-content: center;
  padding: 0 25px 0 25px;
  border: 1px solid #cccccc;
  width: 35%;
  /* height */
  @media (max-height: 700px) {
    height: 50%;
  }
  @media (max-height: 660px) {
    height: 60%;
  }
  @media (max-height: 460px) {
    height: 80%;
  }
  /* width */
  @media (max-width: 1500px) {
    width: 40%;
  }
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    width: 55%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
`;
