import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import { OwnProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { openDelete, closeAll, refresh } from '../../../actions/features/uiSlice';
import Button from './Components/Button';
import { RootState } from '../../../redux';
import { posts } from '../../../actions/service/Posts';
import { toast } from 'react-toastify';

export default function DeleteDialog(props: OwnProps) {
  const { open } = props;
  const idItem = useSelector((state: RootState) => state.ui.id);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(openDelete({}));
  };
  const onDelete = (id?: number) => {
    dispatch(closeAll());
    if (id)
      posts
        .remove(id)
        .then(() => {
          toast.success('Item removed!');
        })
        .catch(() => {
          toast.error('Error when Deleting ');
        })
        .finally(() => {
          dispatch(refresh());
        });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{'Are you sure you want to delete this item?'}</DialogTitle>
      <DialogActions>
        <Button text="Cancel" onClick={onClose} color="primary" />
        <Button onClick={() => onDelete(idItem)} text="OK" color="primary" />
      </DialogActions>
    </Dialog>
  );
}
