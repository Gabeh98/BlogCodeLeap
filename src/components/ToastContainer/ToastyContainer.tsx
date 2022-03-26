import { ToastContainer as ToastC } from 'react-toastify';

const ToastContainer = () => (
  <ToastC
    position="top-left"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default ToastContainer;
