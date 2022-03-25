import { OwnProps } from './types';
import { Button } from './styles';

export default function ButtonComponent(props: OwnProps) {
  const { text, onClick, disable=false } = props;
  return (
    <Button onClick={()=>onClick()} disabled={disable}>
      <b>{text}</b>
    </Button>
  );
}
