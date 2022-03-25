import { Wrapper } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Text from '../../components/Text';
export default function MainScreen() {
  const username = useSelector((state:RootState) =>state.auth.name)
  return (
    <Wrapper>
      <Text>Bem vindo, {username}</Text>
      
    </Wrapper>
  );
}
