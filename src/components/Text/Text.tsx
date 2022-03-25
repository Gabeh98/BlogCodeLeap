import { OwnProps } from './types';
import { Text } from './styles';
export default function TextComponent(props: OwnProps) {
  const { bold, fontsize, children, color } = props;
  return (
    <Text bold={bold} fontsize={fontsize} color={color}>
      {children}
    </Text>
  );
}
