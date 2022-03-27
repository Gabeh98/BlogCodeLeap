import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import { OwnProps } from './types';
import { useDispatch } from 'react-redux';
import { openDelete } from '../../../actions/features/uiSlice';
import Button from './Components/Button';

export default function DeleteDialog(props:OwnProps) {
  const { onDelete, open } = props;

  const dispatch = useDispatch();
  
  const onClose = ()=>{
    dispatch(openDelete())
  }
  
  return (
      <Dialog
        open={open}
        onClose={onClose}  
      >
        <DialogTitle >
          {"Are you sure you want to delete this item?"}
        </DialogTitle>
        <DialogActions>
          <Button text='Cancel' onClick={onClose} color='primary'/>
          <Button onClick={onDelete} text='OK' color='primary'/>
        </DialogActions>
      </Dialog>
  );
}