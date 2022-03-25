import { OwnProps } from './types';
import { Textarea, Wrapper } from './styles';
import Text from '../Text';
import validation from '../../validation';

export default function InputComponent(props: OwnProps) {
  const { placeholder, onChange, label, value } = props;
  return (
    <Wrapper>
      <Text color={'primary'}>{label}</Text>
      <Textarea rows={10} cols={100} wrap="hard" placeholder={placeholder} onChange={onChange} value={value} />
      {validation.sizeField(value || '') ? null : <span style={{ color: '#a11f1f' }}>Minimum 20 characters</span>}
    </Wrapper>
  );
}
