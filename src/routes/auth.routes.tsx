import { Routes, Route, Navigate } from 'react-router-dom';
import Singup from '../pages/Singup';

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<Singup />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AuthRoutes;
