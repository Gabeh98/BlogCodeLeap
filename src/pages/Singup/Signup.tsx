import { useState } from 'react';
import { Wrapper, Form, ButtonWrapper } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';

export default function Singup() {
  const [username, setUsername] = useState<String>();
  return (
    <Wrapper>
      <Form>
        <Text bold fontsize={22}>
          Welcome to CodeLeap network!
        </Text>
        <Input
          placeholder="Username..."
          onChange={e => setUsername(e.target.value)}
          label="Please enter your username"
        />
        <ButtonWrapper >
          <Button text="ENTER" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
