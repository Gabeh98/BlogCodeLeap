import { useState,useEffect} from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import { OwnProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { openEdit } from '../../../actions/features/uiSlice';
import Form from './components/Form';
import Button from '../../Button';
import Input from '../../Input';
import Textarea from '../../Textarea';
import { posts } from '../../../actions/service/Posts';
import { toast } from 'react-toastify';
import { refresh } from '../../../actions/features/uiSlice';

export default function EditDialog(props: OwnProps) {
  const contentMemo = useSelector((state: RootState) => state.post.content);
  const titleMemo = useSelector((state: RootState) => state.post.title);
  const id = useSelector((state: RootState) => state.post.id);
  const [title, setTitle] = useState<string>(titleMemo);
  const [content, setContent] = useState<string>(contentMemo);
  const { open } = props;

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(openEdit());

  };

  const onSubmit = () => {
    dispatch(openEdit());
    posts.put(id||0,{title:title, content:content}).then(()=>{
      toast.success('Success!');
    }).catch(() => {
      toast.error('Error while trying to edit!')
    }).finally(() => {
      dispatch(refresh());
    })
  };
  useEffect(()=>{
    setTitle(titleMemo);
    setContent(contentMemo);
  },[contentMemo,titleMemo])
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{'Edit item'}</DialogTitle>
      <DialogContent>
        <Form>
          <Input label="Title" onChange={e => setTitle(e.target.value)} value={title} />
          <Textarea label="Content" onChange={e => setContent(e.target.value)} value={content} />
        </Form>
      </DialogContent>
      <DialogActions>
        <Button text="SAVE" onClick={() => onSubmit()} disable={title.length >= 3 && content.length >= 3 ? false : true} />
      </DialogActions>
    </Dialog>
  );
}
