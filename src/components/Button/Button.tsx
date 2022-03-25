import { OwnProps } from './types';
import { Button } from './styles';

export default function ButtonComponent(props: OwnProps) {
  const { text } = props;
  return (
    <Button>
      <b>{text}</b>
    </Button>
  );
}
