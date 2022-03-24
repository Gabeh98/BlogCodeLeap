import { useState } from 'react';
import { Wrapper, Form, Text, Input } from './styles';
export default function Singup() {
  const [username, setUsername] = useState<String>();
  console.log(username)
  return (
    <Wrapper>
      <Form>
          <Text>Welcome to CodeLeap network!</Text>
          
          <Text>Please enter your username</Text>
        <Input placeholder="username..." onChange={e=>setUsername(e.target.value)}  />
        <button>Enter</button>
      </Form>
    </Wrapper>
  );
}
