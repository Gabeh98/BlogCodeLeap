import { OwnProps } from './types';
import { Input, Wrapper } from './styles';
import Text from '../Text';
export default function InputComponent(props: OwnProps) {
  const { placeholder, onChange, label } = props;
  return (
    <Wrapper>
      <Text>{label}</Text>
      <Input placeholder={placeholder} onChange={onChange} />
    </Wrapper>
  );
}
