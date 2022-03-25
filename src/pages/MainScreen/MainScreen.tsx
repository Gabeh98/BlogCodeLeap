import { Wrapper, View, Header, ButtonWrapper } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Form from '../../components/Form';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
export default function MainScreen() {
  const username = useSelector((state: RootState) => state.auth.name);
  return (
    <Wrapper>
      <View>
        <Header>
          <Text color="default" bold fontsize={22}>
            CodeLeap Network<Text color="default">Bem vindo, {username}</Text>
          </Text>
        </Header>
        <Form>
          <Input label="Title" />
          <Textarea label="Content" />
          <ButtonWrapper>
            <Button onClick={() => console.log('criado')} text="CREATE" />
          </ButtonWrapper>
        </Form>
      </View>
    </Wrapper>
  );
}
