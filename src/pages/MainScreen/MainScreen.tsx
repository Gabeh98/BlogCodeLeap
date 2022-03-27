import { useEffect, useState, useLayoutEffect } from 'react';
import { Wrapper, View, Header, ButtonWrapper } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Form from '../../components/Form';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import { posts } from '../../actions/service/Posts/calls';
import { PostI, ModalData } from './types';
import PostCard from '../../components/PostCard';
import Skeleton from '../../components/Skeleton';
import { toast } from 'react-toastify';
import { openDelete, openEdit, closeAll, refresh } from '../../actions/features/uiSlice';
import { savePost } from '../../actions/features/postSlice';
import { useDispatch } from 'react-redux';

export default function MainScreen() {
  const [post, setPost] = useState<PostI[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.auth.name);
  const load = useSelector((state: RootState) => state.ui.refresh);

  const clearField = () => {
    setContent('');
    setTitle('');
  };

  const actionModal = (data: ModalData) => {
    console.log(data)

    switch (data.type) {
      case 'edit':{
        dispatch(savePost({id:data.id, title:data.title, content:data.content}));
        dispatch(openEdit());
        break;
      }
      case 'delete':
        dispatch(openDelete({ id: data.id }));
        break;
      default:
        dispatch(closeAll());
        break;
    }
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
        dispatch(refresh());
      });
  };

  useLayoutEffect(() => {
    posts
      .get()
      .then(response => {
        const { results } = response.data;
        setPost(results);
      })
      .catch(() => {
        toast.error('Internal server error!');
      });
  }, []);

  useEffect(() => {
    if (load)
      posts
        .get()
        .then(response => {
          const { results } = response.data;
          setPost(results);
        })
        .catch(() => {
          toast.error('Internal server error!');
        })
        .finally(() => {
          dispatch(refresh());
        });
  }, [load, dispatch]);

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
            <Button
              onClick={() => onSubmit()}
              text="CREATE"
              disable={title.length >= 3 && content.length >= 3 ? false : true}
            />
          </ButtonWrapper>
        </Form>
        {load ? (
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
                onDelete={() => actionModal({ type: 'delete', id: item.id, content: '', title:''})}
                onEdit={() => actionModal({ type: 'edit', content: item.content, title: item.title, id: item.id })}
              />
            );
          })
        )}
      </View>
    </Wrapper>
  );
}
