import { Wrapper, View, Header } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Text from '../../components/Text';

export default function MainScreen() {
  const username = useSelector((state:RootState) =>state.auth.name);
  return (
    <Wrapper>
      <View>
        <Header>
          <Text color="default" bold fontsize={22}>CodeLeap Network<Text color="default">Bem vindo, {username}</Text></Text>
        </Header>

      </View>
    </Wrapper>
  );
}
