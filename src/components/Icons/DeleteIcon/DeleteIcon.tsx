import { Icon } from './styles';
import { OwnProps } from './types';

const DeleteIcon = (props: OwnProps) => (
  <Icon onClick={props.onClick}>
    <img src={require('../../../images/deleteIcon.png')} alt="Delete" width="85%" height="auto" />
  </Icon>
);

export default DeleteIcon;
