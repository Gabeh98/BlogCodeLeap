import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height:100vh;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  height: 30%;
  width: auto;
  justify-content: center;
  padding: 0 10px 0 10px;
  border: 1px solid #CCCCCC;
  width: 500px;
  p:last-of-type{
    align-items: flex-end;
  }
`;

export const Text = styled.div`
    font-family: 'Roboto';
`;
export const Input = styled.input`
    width: 100%;
`;