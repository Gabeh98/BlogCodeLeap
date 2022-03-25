import './styles/GlobalStyles.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
