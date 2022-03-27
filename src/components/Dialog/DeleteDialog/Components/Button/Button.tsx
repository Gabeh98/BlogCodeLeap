import { OwnProps } from './types';
import { Button } from './styles';

export default function ButtonComponent(props: OwnProps) {
  const { text, onClick } = props;
  return (
    <Button onClick={() => onClick()}>
      <b>{text}</b>
    </Button>
  );
}
