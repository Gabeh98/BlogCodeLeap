import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
const Routes = () => {
  const logged = useSelector((state: RootState) => state.auth.logged);
  return <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
};

export default Routes;
