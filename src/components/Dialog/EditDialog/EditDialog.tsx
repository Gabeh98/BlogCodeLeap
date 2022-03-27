import { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import { OwnProps } from './types';
import { useDispatch } from 'react-redux';
import { openEdit } from '../../../actions/features/uiSlice';
import Form from './components/Form';
import Button from '../../Button';
import Input from '../../Input';
import Textarea from '../../Textarea';

export default function EditDialog(props: OwnProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { onSubmit, open } = props;

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(openEdit());
  };

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
        <Button text="SAVE" onClick={onSubmit} disable={title.length >= 3 && content.length >= 3 ? false : true} />
      </DialogActions>
    </Dialog>
  );
}
