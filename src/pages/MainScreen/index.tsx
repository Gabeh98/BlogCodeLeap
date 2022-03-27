import MainScreen from './MainScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import DeleteDialog from '../../components/Dialog/DeleteDialog';
import EditDialog from '../../components/Dialog/EditDialog';

export function ScreenControl() {
  const deleteModal = useSelector((state: RootState) => state.ui.deleteModal);
  const editModal = useSelector((state: RootState) => state.ui.editModal);
  return (
    <>
      <MainScreen />
      <DeleteDialog open={deleteModal || false} />
      <EditDialog open={editModal || false} />
    </>
  );
}

export default ScreenControl;
