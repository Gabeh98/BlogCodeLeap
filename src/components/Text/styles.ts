import styled from 'styled-components';
import { OwnProps } from './types';

export const Text = styled.div<OwnProps>`
  font-family: 'Roboto';
  font-weight: ${props => (props.bold ? '700' : '400')};
  font-size: ${props => props.fontsize || 18}px;
  color: ${props => (props.color === 'primary' ? '#000' : '#fff')};
`;
