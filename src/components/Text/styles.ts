import styled from 'styled-components';
import { OwnProps } from './types';

export const Text = styled.div<OwnProps>`
  font-family: 'Roboto';
  font-weight: ${props => (props.bold ? '700' : '400')};
  font-size: ${props => props.fontsize || 18}px;
  color: ${props => handleColor(props.color)};
`;
const handleColor = (color?: string) => {
  switch (color) {
    case 'primary':
      return '#000';
    case 'secondary':
      return '#777';
    default:
      return '#fff';
  }
};
