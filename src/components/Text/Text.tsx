import { OwnProps } from './types';
import { Text } from './styles';
export default function TextComponent(props: OwnProps) {
  const { bold, fontsize, children } = props;
  return (
    <Text bold={bold} fontsize={fontsize}>
      {children}
    </Text>
  );
}
