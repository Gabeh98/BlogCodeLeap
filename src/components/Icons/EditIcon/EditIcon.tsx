import { Icon } from './styles';
import { OwnProps } from './types';

const EditIcon = (props: OwnProps) => (
  <Icon onClick={props.onClick}>
    <img src={require('../../../images/editIcon.png')} alt="Edit" width="80%" height="auto" />
  </Icon>
);

export default EditIcon;
