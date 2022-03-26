import { useEffect, useState } from 'react';
import { Wrapper, View, Header, ButtonWrapper } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Form from '../../components/Form';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import { posts } from '../../actions/service/Posts/calls';
import {PostI} from './types';
import PostCard from '../../components/PostCard'

export default function MainScreen() {
  const username = useSelector((state: RootState) => state.auth.name);
  const [post, setPost] = useState<PostI[]>([])
  console.log(post)
  useEffect(()=>{
    posts.get().then((response)=>{
      const {data} = response;
      setPost(data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
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
        {post.map(item=>{
          return <PostCard title={item.title} key={item.id} content={item.content} username={item.username} created_datetime={item.created_datetime}/>
        })}
      </View>
    </Wrapper>
  );
}
