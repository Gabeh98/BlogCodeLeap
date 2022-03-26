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
import { PostI } from './types';
import PostCard from '../../components/PostCard';
import Skeleton from '../../components/Skeleton';
import { toast } from 'react-toastify';

export default function MainScreen() {
  const [post, setPost] = useState<PostI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const username = useSelector((state: RootState) => state.auth.name);
  const clearField = () => {
    setContent('');
    setTitle('');
  };
  const onSubmit = () => {
    posts
      .post({ username: username, title: title, content: content })
      .then(() => {
        toast.success('Success!');
      })
      .catch(() => {
        toast.error('Fail to create a new post!');
      })
      .finally(() => {
        clearField();
      });
  };

  useEffect(() => {
    posts
      .get()
      .then(response => {
        const { data } = response;
        setPost(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <View>
        <Header>
          <Text color="default" bold fontsize={22}>
            CodeLeap Network<Text color="default">Welcome, {username}</Text>
          </Text>
        </Header>
        <Form>
          <Input label="Title" onChange={e => setTitle(e.target.value)} value={title} />
          <Textarea label="Content" onChange={e => setContent(e.target.value)} value={content} />
          <ButtonWrapper>
            <Button onClick={() => onSubmit()} text="CREATE" disable={title.length>=3 && content.length >= 3 ? false : true} />
          </ButtonWrapper>
        </Form>
        {loading ? (
          <Skeleton />
        ) : (
          post.map(item => {
            return (
              <PostCard
                title={item.title}
                key={item.id}
                content={item.content}
                username={item.username}
                created_datetime={item.created_datetime}
              />
            );
          })
        )}
      </View>
    </Wrapper>
  );
}
