import { OwnProps } from './types';
import { Input, Wrapper } from './styles';
import Text from '../Text';
import validation from '../../validation';

export default function InputComponent(props: OwnProps) {
  const { placeholder, onChange, label, value } = props;
  return (
    <Wrapper>
      <Text color={'primary'}>{label}</Text>
      <Input placeholder={placeholder} onChange={onChange} value={value} />
      {validation.sizeField(value || '') ? null : <span style={{ color: '#a11f1f' }}>Minimum field 3 characters</span>}
    </Wrapper>
  );
}
