import { useState } from 'react';
import { Wrapper, Form, ButtonWrapper } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import { useDispatch } from 'react-redux';
import {authSwitch} from '../../actions/features/authSlice'
export default function Singup() {
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = (value:string) => {
    dispatch(authSwitch({logged:true,name:value}))
  }
  return (
    <Wrapper>
      <Form>
        <Text bold fontsize={22} color={'primary'}>
          Welcome to CodeLeap network!
        </Text>
        <Input
          placeholder="Username..."
          onChange={e => setUsername(e.target.value)}
          label="Please enter your username"
          value={username}
        />
        <ButtonWrapper>
          <Button text="ENTER" onClick={()=>onSubmit(username)} disable={username.length<3}/>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
