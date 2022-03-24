import { Routes, Route, Navigate } from 'react-router-dom';
import MainScreen from '../pages/MainScreen';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainScreen />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
