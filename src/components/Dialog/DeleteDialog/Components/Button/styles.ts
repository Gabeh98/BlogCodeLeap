import styled, { css } from 'styled-components';
import { OwnProps } from './types';

export const Button = styled.button<OwnProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${props => (props.color==='primary' ? '#fff' : '#000')};
  background-color: ${props => (props.color==='primary' ? '#000' : '#fff')};
  padding: 7px 31px 7px 31px;
  margin: 0;
  cursor: pointer;
  outline: none;
  border: 1px solid #000000;
  ${props =>
    !props.disabled &&
    css`
      &:active {
        transform: scale(0.98);
        background-size: 100%;
        transition: background 0s;
        &:hover {
          background: #333 radial-gradient(circle, transparent 1%, #333 1%) center/15000%;
        }
      }
    `}
`;
