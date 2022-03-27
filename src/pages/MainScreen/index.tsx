import MainScreen from './MainScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import DeleteDialog from '../../components/Dialog/DeleteDialog';

export function ScreenControl(){
    const deleteModal = useSelector((state:RootState) => state.ui.deleteModal);

    return(
        <>
            <MainScreen/>
            <DeleteDialog open={deleteModal} onDelete={()=>{}} />
        </> 
    )
}


export default ScreenControl;
