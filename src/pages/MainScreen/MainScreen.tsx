import { Wrapper } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export default function MainScreen() {
  const username = useSelector((state:RootState) =>state.auth.name)
  return <Wrapper>Bem vindo, {username}</Wrapper>;
}
