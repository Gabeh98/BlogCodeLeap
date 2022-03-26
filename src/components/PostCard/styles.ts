import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid #999999;
  position: relative;
  margin: 5%;
  flex-direction: column;
  gap: 10px;
  width: 90%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #000;
  height: 80px;
  align-items: center;
  width: 100%;
  div {
    margin: 5%;
  }
`
export const Content = styled.div`
  display: flex;
  position: relative;
  margin:  0 5% 5% 5%;
  flex-direction: column;
  gap: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;
`