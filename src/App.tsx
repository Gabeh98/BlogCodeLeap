import './styles/GlobalStyles.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux';
import ToastContainer from './components/ToastContainer';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes />
    </Provider>
  );
}

export default App;
